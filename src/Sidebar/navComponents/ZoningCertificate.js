import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const polygonCoords = [
  [40.7128, -74.006], // Point 1 (New York)
  [40.73061, -73.9352], // Point 2
  [40.741, -73.98], // Point 3
  [40.72, -74.02], // Point 4
  [40.7128, -74.006], // Closing the polygon (same as first point)
];

function ZoningCertificate() {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={11}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polygon
        pathOptions={{ color: "blue", fillOpacity: 0.3 }}
        positions={polygonCoords}
      />
    </MapContainer>
  );
}

export default ZoningCertificate;
