import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { myjson } from "../../test/land-use";

// const geojsonData = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: { name: "My Area" },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [-0.1276, 51.5074], // London
//             [-0.127, 51.5078],
//             [-0.1265, 51.5074],
//             [-0.1276, 51.5074], // Closing the polygon
//           ],
//         ],
//       },
//     },
//   ],
// };

const ZoningCertificate = () => {
  return (
    <MapContainer
      center={[10.253606684935717, 123.82942553200422]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      {/* Base Map */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* GeoJSON Layer */}
      <GeoJSON data={myjson} />
    </MapContainer>
  );
};

export default ZoningCertificate;
