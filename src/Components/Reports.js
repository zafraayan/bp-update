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
import Header from "./print-components/Header";
import { formatDate } from "../helpers/formatDate";

const ReportWrapper = styled.div`
  display: "flex";
  width: 80%;
  margin: auto;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 200px;
  height: 35px;
  font-family: "Inter";
  text-align: center;
  font-size: 12;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 30%;
  margin-left: 10px;
  margin-right: 10px;
`;

const Select = styled.select`
  width: 200px;
  height: 35px;
  font-family: "Inter";
  text-align: center;
  font-size: 12;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 30%;
  margin-left: 10px;
  margin-right: 10px;
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
  width: 30%;

  &:hover {
    margin-left: 10px;
    margin-right: 10px;
    background-color: #a9cec2;
    color: white;
  }
`;

const SearchHeading = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

function Reports() {
  const [records, setRecords] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [barangay, setBarangay] = useState("");

  const CONST = "City";

  const fetchOrders = async () => {
    if (!startDate || !endDate) return;

    let query = supabase
      .from("businesspermit")
      .select("*")
      .gte("date", startDate)
      .lte("date", endDate);

    if (barangay !== CONST) {
      query = query.eq("barangay", barangay); //this will add at the end of query variable
    }

    const { data, isLoading, error } = await query;

    if (isLoading) return <p>Loading...</p>;

    if (error) {
      console.error("Error fetching orders:", error);
    } else {
      setRecords(data);
    }
  };

  function handleSubmit() {
    fetchOrders();
  }

  return (
    <>
      <ReportWrapper>
        <SearchHeading>
          Enter the date range and barangay to generate report
        </SearchHeading>

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
        <div style={{ fontSize: "10px", fontStyle: "italic" }}>
          Note: Always click generate when you change the search query.
        </div>
      </ReportWrapper>

      {records.length > 0 ? (
        <PDFViewer style={reportStyles.size}>
          <Document>
            <Page size="Folio" style={reportStyles.page}>
              <Header />
              <Generic record={records} selectedbar={barangay} />
              <BusinessType record={records} selectedbar={barangay} />
              <ZoningClassification record={records} selectedbar={barangay} />

              <View style={reportStyles.footer}>
                <Text>{`Source: Permit Flow System (City Planning and Development Coordinator)`}</Text>
                <Text>{`Date Generated: ${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`}</Text>
                <Text>{`Date Range Requested: ${formatDate(
                  startDate
                )} - ${formatDate(endDate)}`}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      ) : (
        "No data found"
      )}
    </>
  );
}

export default Reports;
