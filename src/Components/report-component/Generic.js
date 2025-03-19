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

function Generic({ record, selectedbar }) {
  const [totalApplicant, setTotalApplicant] = useState();
  const [totalMale, setTotalMale] = useState();
  const [totalFemale, setTotalFemale] = useState();

  useEffect(() => {
    const totMale = record
      .map((el) => el.male)
      .reduce((el, acc) => el + acc, 0);

    const totFemale = record
      .map((el) => el.female)
      .reduce((el, acc) => el + acc, 0);

    setTotalMale(totMale);
    setTotalFemale(totFemale);
  });

  return (
    <>
      <Text style={reportStyles.headingLabel}>Barangay {selectedbar}</Text>
      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.header}>Total Applicants</Text>
        <Text style={reportStyles.header}>Male</Text>
        <Text style={reportStyles.header}>Female</Text>
        <Text style={reportStyles.header}>Total Employee</Text>
        <Text style={reportStyles.header}>Compliant</Text>
        <Text style={reportStyles.header}>Non-Compliant</Text>
      </View>

      <View style={reportStyles.genericWrapper}>
        <Text style={reportStyles.body}>{record.length}</Text>
        <Text style={reportStyles.body}>{totalMale}</Text>
        <Text style={reportStyles.body}>{totalFemale}</Text>
        <Text style={reportStyles.body}>{totalMale + totalFemale}</Text>
        <Text style={reportStyles.body}>Compliant</Text>
        <Text style={reportStyles.body}>Non-Compliant</Text>
      </View>
    </>
  );
}

export default Generic;
