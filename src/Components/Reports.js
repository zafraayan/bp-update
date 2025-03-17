import React from "react";
import Generic from "./report-component/Generic";
import SearchSection from "./report-component/SearchSection";
import BusinessType from "./report-component/BusinessType";
import ZoningClassification from "./report-component/ZoningClassification";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { reportStyles } from "./report-component/report-style";

function Reports() {
  return (
    <PDFViewer style={reportStyles.size}>
      <Document>
        <Page size="Folio" style={reportStyles.page}>
          <SearchSection />
          <Generic />
          <BusinessType />
          <ZoningClassification />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Reports;
