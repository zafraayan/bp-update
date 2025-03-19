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

  useEffect(() => {
    const countMap = record.reduce((acc, obj) => {
      acc[obj.zonClassification] = (acc[obj.zonClassification] || 0) + 1;
      return acc;
    }, {});

    const result = Object.entries(countMap).map(([zonTitle, count]) => ({
      zonTitle,
      count,
    })); //creates new object array that contains zonClass and number of occurences

    console.log(result);
  }, [record]);

  return (
    <>
      <Text style={reportStyles.headingLabel}>BusinessType</Text>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.header}>Zoning Classification</Text>
        <Text style={reportStyles.header}>Total Applicants</Text>
        <Text style={reportStyles.header}>Area in ha</Text>
      </View>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.body}>{}</Text>
        <Text style={reportStyles.body}>{record.length}</Text>
        <Text style={reportStyles.body}>{totalArea}</Text>
      </View>
    </>
  );
}

export default BusinessType;
