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

  const getColor = (value) => {
    return value > 100 ? "red" : value > 50 ? "orange" : "green";
  };

  // Custom styling for GeoJSON features
  const getStyle = (feature) => ({
    fillColor: feature.properties.color, // Change to match actual property name
    weight: 1,
    opacity: 1,
    color: "black",
    fillOpacity: 1,
  });

  // Function to add popups on each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.name}</b>`);
    }
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
