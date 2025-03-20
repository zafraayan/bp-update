import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { reportStyles } from "./report-style";

function ZoningClassification({ record, selectedbar }) {
  return (
    <>
      <Text style={reportStyles.headingLabel}>List of Businesses</Text>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.header}>Name of Applicant</Text>
        <Text style={reportStyles.header}>Name of Corporation</Text>
        <Text style={reportStyles.header}>Business Name</Text>
        <Text style={reportStyles.header}>Business Type</Text>
      </View>
      {record.map((el) => (
        <>
          <View style={reportStyles.genericWrapper}>
            <Text
              style={reportStyles.body}
            >{`${el.lName}, ${el.fName} ${el.mName}`}</Text>
            <Text style={reportStyles.body}>{el.corpName}</Text>
            <Text style={reportStyles.body}>{el.busName}</Text>
            <Text style={reportStyles.body}>{el.busType}</Text>
          </View>
        </>
      ))}
    </>
  );
}

export default ZoningClassification;
