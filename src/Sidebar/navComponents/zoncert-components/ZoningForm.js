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

const InputReadonly = styled(Input)`
  pointer-events: none;
  background-color: rgb(154, 158, 158);
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

const Button = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 24px;
  place-content: center;
  border: none;
  /* margin-top: 20px; */

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

function ZoningForm({ landuse, markerPosition }) {
  return (
    <ZoningFormWrapper>
      <Input type="date"></Input>
      <Select>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </Select>
      <Input type="number" placeholder="Area"></Input>
      <Input type="text" placeholder="Last Name"></Input>
      <Input type="text" placeholder="First Name"></Input>
      <Input type="text" placeholder="Middle Name"></Input>
      <Input type="text" placeholder="Lot Number"></Input>
      <Input type="text" placeholder="TCT Number"></Input>
      <Input type="number" placeholder="Area in hectares"></Input>
      <InputReadonly
        type="text"
        placeholder="Zoning Classification"
        value={landuse}
      ></InputReadonly>
      <InputReadonly
        type="text"
        placeholder="Coordinates"
        value={`${markerPosition.lat.toFixed(5)}, ${markerPosition.lng.toFixed(
          5
        )}`}
      ></InputReadonly>
      <Button>Save</Button>
    </ZoningFormWrapper>
  );
}

export default ZoningForm;
