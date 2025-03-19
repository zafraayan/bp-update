import React, { useEffect, useState } from "react";
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
import styled from "styled-components";
import { barangay as bar } from "../Sidebar/array/arrays";
import { supabase } from "../database/supabase";
import { data } from "react-router";

const ReportWrapper = styled.div`
  display: "flex";
  gap: 50px;
`;

const Input = styled.input`
  width: 200px;
  height: 35px;
  font-family: "Inter";
  text-align: center;
  font-size: 12;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 200px;
  height: 35px;
  font-family: "Inter";
  text-align: center;
  font-size: 12;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  font-family: "Inter";
  text-align: center;
  font-size: 12;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Reports() {
  const [orders, setOrders] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [barangay, setBarangay] = useState("");

  // useEffect(() => {
  //   if (startDate && endDate) {
  //     fetchOrders();
  //   }
  // }, [startDate, endDate]);

  const fetchOrders = async () => {
    if (!startDate || !endDate) return;

    const { data, error } = await supabase
      .from("businesspermit")
      .select("*")
      .gte("date", startDate)
      .lte("date", endDate)
      .eq("barangay", barangay); // Less than or equal to end date

    if (error) {
      console.error("Error fetching orders:", error);
    } else {
      // setOrders(data);
      console.log(data);
    }
  };

  function handleSubmit() {
    fetchOrders();
  }

  return (
    <>
      <ReportWrapper>
        <label>From</label>
        <label>To</label>
      </ReportWrapper>
      <ReportWrapper>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></Input>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></Input>
        <Select value={barangay} onChange={(e) => setBarangay(e.target.value)}>
          {bar.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </Select>
        <Button onClick={handleSubmit}>Generate</Button>
      </ReportWrapper>
      <PDFViewer style={reportStyles.size}>
        <Document>
          <Page size="Folio" style={reportStyles.page}>
            <Generic />
            <BusinessType />
            <ZoningClassification />
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default Reports;
