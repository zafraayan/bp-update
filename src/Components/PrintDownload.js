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
import Body from "./print-components/Body";
import { useSelector } from "react-redux";

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
            <Body toPrint={toPrint} />
          </Page>
        </Document>
      </PDFViewer>

      {/* </PDFViewer> */}
    </>
  );
}

export default PrintDownload;
