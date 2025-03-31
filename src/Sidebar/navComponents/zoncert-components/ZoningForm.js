import React from "react";
import styled from "styled-components";
import { barangay } from "../../array/arrays";

const ZoningFormWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  font-family: "Inter", serif;
  width: 90%;
  height: 35px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  text-align: center;
`;

const Select = styled.select`
  font-family: "Inter", serif;
  width: 90%;
  height: 35px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  text-align: center;
`;

function ZoningForm({ landuse }) {
  return (
    <ZoningFormWrapper>
      <Input type="date"></Input>
      <Select>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </Select>
      <Input type="text" placeholder="Area"></Input>
      <Input type="text" placeholder="Last Name"></Input>
      <Input type="text" placeholder="First Name"></Input>
      <Input type="text" placeholder="Middle Name"></Input>
      <Input type="text" placeholder="Lot Number"></Input>
      <Input type="text" placeholder="TCT Number"></Input>
      <Input type="number" placeholder="Area in hectares"></Input>
      <Input
        type="text"
        placeholder="Zoning Classification"
        value={landuse}
      ></Input>
    </ZoningFormWrapper>
  );
}

export default ZoningForm;
