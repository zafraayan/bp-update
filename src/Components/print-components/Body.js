import React from "react";
import { styles } from "../style";
import { View, Text, Image } from "@react-pdf/renderer";
import city from "../../images/city.jpg";
import LocationalClearance from "./LocationalClearance";
import Header from "./Header";
import EvaluationReport from "./EvaluationReport";
import { useSelector } from "react-redux";

function Body({ toPrint }) {
  return (
    <>
      <LocationalClearance toPrint={toPrint} props={`OWNER'S COPY`} />
      <LocationalClearance toPrint={toPrint} props={`ZONING'S COPY`} />
      <EvaluationReport toPrint={toPrint} />
    </>
  );
}

export default Body;
