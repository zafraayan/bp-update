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

function ZoningClassification() {
  return (
    <>
      <Text style={reportStyles.headingLabel}>Zoning Classification</Text>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.header}>Barangay</Text>
        <Text style={reportStyles.header}>Total Applicants</Text>
        <Text style={reportStyles.header}>Male</Text>
        <Text style={reportStyles.header}>Female</Text>
        <Text style={reportStyles.header}>Total Employee</Text>
        <Text style={reportStyles.header}>Compliant</Text>
        <Text style={reportStyles.header}>Non-Compliant</Text>
      </View>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.body}>Barangay</Text>
        <Text style={reportStyles.body}>Total Applicants</Text>
        <Text style={reportStyles.body}>Male</Text>
        <Text style={reportStyles.body}>Female</Text>
        <Text style={reportStyles.body}>Total Employee</Text>
        <Text style={reportStyles.body}>Compliant</Text>
        <Text style={reportStyles.body}>Non-Compliant</Text>
      </View>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.body}>Barangay</Text>
        <Text style={reportStyles.body}>Total Applicants</Text>
        <Text style={reportStyles.body}>Male</Text>
        <Text style={reportStyles.body}>Female</Text>
        <Text style={reportStyles.body}>Total Employee</Text>
        <Text style={reportStyles.body}>Compliant</Text>
        <Text style={reportStyles.body}>Non-Compliant</Text>
      </View>
    </>
  );
}

export default ZoningClassification;
