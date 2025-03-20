import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { reportStyles } from "./report-style";

function BusinessType({ record, selectedbar }) {
  const [zonClass, setZonClass] = useState();
  const [totalArea, setTotalArea] = useState();
  const [type, setType] = useState([]);

  useEffect(() => {
    const businessClass = Object.values(
      record.reduce((acc, { zonClassification, area }) => {
        if (!acc[zonClassification]) {
          acc[zonClassification] = {
            title: zonClassification,
            totalArea: 0,
            occurrences: 0,
          };
        }
        acc[zonClassification].totalArea += area;
        acc[zonClassification].occurrences += 1;
        return acc;
      }, {})
    );

    setType(businessClass);
  }, [record]);

  return (
    <>
      <Text style={reportStyles.headingLabel}>Business Type</Text>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.header}>Zoning Classification</Text>
        <Text style={reportStyles.header}>Total Applicants</Text>
        <Text style={reportStyles.header}>Total Area</Text>
      </View>

      {type.map((el) => (
        <>
          <View style={reportStyles.genericWrapper}>
            <Text style={reportStyles.body}>{el.title}</Text>
            <Text style={reportStyles.body}>{el.occurrences}</Text>
            <Text style={reportStyles.body}>{el.totalArea}</Text>
          </View>
        </>
      ))}
    </>
  );
}

export default BusinessType;
