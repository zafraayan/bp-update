import { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is loaded
import ZoningForm from "./zoncert-components/ZoningForm";
import styled from "styled-components";
// import { click } from "@testing-library/user-event/dist/click";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { CgCloseR } from "react-icons/cg";

const ZcWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  gap: 20px;
`;

const FormWrapper = styled.div`
  width: 50%;
  height: auto;
  background-color: #393b40;
  border-radius: 20px;
  padding: 10px;
  position: relative;
`;

const MapWrapper = styled(MapContainer)`
  height: 90vh;
  width: 100%;
  border-radius: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  padding: 5px;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  color: white;
  font-weight: 700;

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

const MapAdjustContainer = styled.div`
  display: flex;
  gap: 10px;
  place-content: center;
`;

const ButtonAdjustment = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 14px;
  border: none;
  font-weight: 600;
  border-radius: 10px;

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

const FeatureOpacity = styled(ButtonAdjustment)`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 10px;
  gap: 5px; /* Adds spacing between elements */
`;

const ZoningCertificate = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const [landuse, setLanduse] = useState();
  const [showForm, setShowform] = useState(false);
  const [showmap, setShowmap] = useState(true);
  const [showfeatures, setShowfeatures] = useState(true);
  const [mapview, setMapview] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [opacityVal, setOapcityVal] = useState(100);
  const [markerPosition, setMarkerPosition] = useState(null);
  // const [streetmap, setStreetmap] = useState(false);

  const opacityRef = useRef(opacity);

  useEffect(() => {
    opacityRef.current = opacity;
  }, [opacity]);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        const response = await fetch("/test.geojson"); // Make sure it's in `public/`
        if (!response.ok) throw new Error("Failed to fetch GeoJSON");

        const data = await response.json();
        setGeojsonData(data);
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
      }
    };

    fetchGeoJSON();
  }, []);

  // Custom styling for GeoJSON features
  const getStyle = (feature) => ({
    fillColor: feature.properties.color, // Change to match actual property name
    fillOpacity: opacityRef.current,
    weight: 1,
    opacity: 1,
    color: "black",
  });

  // Function to add popups on each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.zcode}</b> `);
    }

    layer.on({
      click: (e) => {
        // layer
        //   .bindPopup(
        //     `<b>${feature.properties.zcode}</b> - <b>${feature.properties.ZoneCode}</b>`
        //   )
        //   .openPopup();
        setLanduse(feature.properties.zcode);
        setShowform(true);
      },

      mouseover: (e) => {
        const hoveredLayer = e.target;
        // layer.bindPopup(`<b>${feature.properties.zcode}</b>`).openPopup();
        hoveredLayer.setStyle({
          fillColor: "gray", // Color on hover
          fillOpacity: opacityRef.current,
          // weight: 3,
          color: "black",
        });
      },
      mouseout: (e) => {
        const hoveredLayer = e.target;
        // hoveredLayer.setStyle(getStyle(feature)); // Reset to default style
        // setOpacity(0.5);
        // console.log(opacity);
        hoveredLayer.setStyle(getStyle(feature));
      },
    });
  };

  function handleMapView() {
    setMapview(!mapview);
  }

  function handleOpacity(e) {
    setOpacity(Number(e.target.value) / 100);
    setOapcityVal(e.target.value);
  }

  function ClickHandler() {
    useMapEvents({
      click: (e) => {
        setMarkerPosition(e.latlng); // Set marker position on click
      },
    });
    return null;
  }

  // Create custom marker icon
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 50],
    iconAnchor: [16, 50],
    popupAnchor: [0, -32],
  });

  return (
    <ZcWrapper>
      {showForm && (
        <FormWrapper>
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>Client's Information</h2>
            <ZoningForm landuse={landuse} markerPosition={markerPosition} />

            <CloseButton onClick={() => setShowform(false)}>
              <CgCloseR />
            </CloseButton>
            <MapAdjustContainer>
              <ButtonAdjustment onClick={() => setShowmap(!showmap)}>
                {showmap ? "Hide Overlay" : "Show Overlay"}
              </ButtonAdjustment>
              <ButtonAdjustment onClick={() => setShowfeatures(!showfeatures)}>
                {showfeatures ? "Hide Features" : "Show Features"}
              </ButtonAdjustment>
              <ButtonAdjustment onClick={handleMapView}>
                {mapview ? "Satellite View" : "Streetmap View"}
              </ButtonAdjustment>
            </MapAdjustContainer>
            <FeatureOpacity>
              <label>Feature Opacity:</label>
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="100"
                value={opacityVal}
                onChange={handleOpacity}
              />
              {`${opacityVal}% `}
            </FeatureOpacity>
          </form>
        </FormWrapper>
      )}

      <MapWrapper center={[10.288613081875678, 123.81768171707611]} zoom={13}>
        <ClickHandler />
        {showmap && (
          <>
            {mapview ? (
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            ) : (
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="&copy; <a href='https://www.esri.com/'>Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics"
              />
            )}
          </>
        )}
        {/* <Marker position={clickCoor?.current}>
          <Popup>Clicked at:</Popup>
        </Marker> */}
        {showfeatures && geojsonData && (
          <GeoJSON
            data={geojsonData}
            style={getStyle}
            onEachFeature={onEachFeature}
          />
        )}

        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}>
            {/* <Popup>
              Clicked at: {markerPosition.lat.toFixed(5)},
              {markerPosition.lng.toFixed(5)}
            </Popup> */}
          </Marker>
        )}
      </MapWrapper>
    </ZcWrapper>
  );
};

export default ZoningCertificate;
