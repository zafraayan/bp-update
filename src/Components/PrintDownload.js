import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { styles } from "./style";
import Header from "./print-components/Header";

import { useSelector } from "react-redux";
import LocationalClearance from "./print-components/LocationalClearance";
import EvaluationReport from "./print-components/EvaluationReport";

function PrintDownload() {
  const toPrint = useSelector((state) => state.business.toPrint);
  console.log(toPrint);
  return (
    <>
      <h1>Print / Download </h1>
      {/* <PDFViewer> */}
      <PDFViewer style={styles.size}>
        <Document>
          <Page size="Folio" style={styles.page}>
            <LocationalClearance toPrint={toPrint} props={`OWNER'S COPY`} />
          </Page>
          <Page size="Folio" style={styles.page}>
            <LocationalClearance toPrint={toPrint} props={`OWNER'S COPY`} />
          </Page>
          <Page size="Folio" style={styles.page}>
            <EvaluationReport toPrint={toPrint} />
          </Page>
        </Document>
      </PDFViewer>

      {/* </PDFViewer> */}
    </>
  );
}

export default PrintDownload;
