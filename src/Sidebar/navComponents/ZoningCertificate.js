import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is loaded
import ZoningForm from "./zoncert-components/ZoningForm";
import styled from "styled-components";

const ZcWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  gap: 20px;
`;

const FormWrapper = styled.div`
  width: 50%;
  height: auto;
  background-color: black;
  border-radius: 20px;
  padding: 10px;
`;

const MapWrapper = styled(MapContainer)`
  height: 90vh;
  width: 100%;
  border-radius: 20px;
`;

const ZoningCertificate = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const [landuse, setLanduse] = useState();
  const [showForm, setShowform] = useState(false);
  const [showmap, setShowmap] = useState(true);
  const [showfeatures, setShowfeatures] = useState(true);
  const [mapview, setMapview] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [opacityVal, setOapcityVal] = useState(1);
  // const [streetmap, setStreetmap] = useState(false);

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
    weight: 1,
    opacity: 1,
    color: "black",
    fillOpacity: opacity,
  });

  // Function to add popups on each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.zcode}</b> `);
    }

    layer.on({
      click: (e) => {
        layer
          .bindPopup(
            `<b>${feature.properties.zcode}</b> - <b>${feature.properties.ZoneCode}</b>`
          )
          .openPopup();
        setLanduse(feature.properties.zcode);
        setShowform(true);
      },

      mouseover: (e) => {
        const hoveredLayer = e.target;

        // layer.bindPopup(`<b>${feature.properties.zcode}</b>`).openPopup();
        hoveredLayer.setStyle({
          fillColor: "white", // Color on hover
          fillOpacity: opacity,
          // weight: 3,
          color: "black",
        });
      },
      mouseout: (e) => {
        const hoveredLayer = e.target;
        hoveredLayer.setStyle(getStyle(feature)); // Reset to default style
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

  return (
    <ZcWrapper>
      {showForm && (
        <FormWrapper>
          {/* <form> */}
          <h2>Client's Information</h2>
          <ZoningForm landuse={landuse} />

          <button onClick={() => setShowform(false)}>Close</button>
          <button onClick={() => setShowmap(!showmap)}>
            {showmap ? "Hide Overlay" : "Show Overlay"}
          </button>
          <button onClick={() => setShowfeatures(!showfeatures)}>
            {showfeatures ? "Hide Features" : "Show Features"}
          </button>
          <button onClick={handleMapView}>
            {mapview ? "Satellite View" : "Streetmap View"}
          </button>
          <div
            style={{
              display: "flex",
              // alignItems: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
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
          </div>
          {/* </form> */}
        </FormWrapper>
      )}

      <MapWrapper center={[10.288613081875678, 123.81768171707611]} zoom={13}>
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
        {showfeatures && geojsonData && (
          <GeoJSON
            data={geojsonData}
            style={getStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapWrapper>
    </ZcWrapper>
  );
};

export default ZoningCertificate;
