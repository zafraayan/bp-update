import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is loaded

const ZoningCertificate = () => {
  const [geojsonData, setGeojsonData] = useState(null);

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
  const getStyle = (feature) => {
    const value = feature.properties.ZoneCode; // Change to your actual property name
    return {
      fillColor: value === "R1Z" ? "red" : "green", // Adjust logic as needed
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 1,
    };
  };

  // Function to add popups on each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.name}</b>`);
    }

    layer.on({
      mouseover: (e) => {
        const hoveredLayer = e.target;

        layer.bindPopup(`<b>${feature.properties.zcode}</b>`).openPopup();
        hoveredLayer.setStyle({
          fillColor: "yellow", // Color on hover
          fillOpacity: 0.9,
          // weight: 3,
          color: "black",
        });
      },
      mouseout: (e) => {
        const hoveredLayer = e.target;
        hoveredLayer.setStyle(getStyle(feature)); // Reset to default style
      },
      click: (e) => {
        layer.bindPopup(`<b>${feature.properties.ZoneCode}</b>`).openPopup();
      },
    });
  };

  return (
    <MapContainer
      center={[10.253670370704874, 123.82930260780415]}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          style={getStyle}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
};

export default ZoningCertificate;
