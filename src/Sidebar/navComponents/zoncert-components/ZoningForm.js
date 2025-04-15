import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { barangay } from "../../array/arrays";
import { useForm } from "react-hook-form";
import ZonCertCrud from "../../../database/ZonCertCrud";
import { Toaster } from "react-hot-toast";
import { marker } from "leaflet";
import { useNavigate } from "react-router";

const ZoningFormWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

function ZoningForm({
  landuseset,
  landuse,
  markerPosition,
  zoneCode,
  tmarker,
  stmarker,
  stlanduse,
}) {
  const { register, handleSubmit, reset, watch } = useForm();
  const { useZoncertInsert } = ZonCertCrud();
  const [resetCoor, setResetcoor] = useState();
  const [areaVal, setAreaVal] = useState();

  useEffect(() => {
    setResetcoor(
      `${markerPosition.lat.toFixed(5)}, ${markerPosition.lng.toFixed(5)}`
    );
  }, [markerPosition]);

  useEffect(() => {
    const sqm = watch("area");
    const hectaresval = sqm / 10000;

    setAreaVal(hectaresval);
  }, [areaVal]);

  function onSubmit(data1) {
    createmutation.mutate(data1);
  }

  function handleReset(e) {
    stmarker([]);
    stlanduse([]);
    reset();
  }

  const createmutation = useZoncertInsert(
    reset,
    setResetcoor,
    landuseset,
    tmarker
  );

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ZoningFormWrapper>
          <Input type="date" {...register("date")}></Input>
          <Select {...register("barangay")}>
            {barangay.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </Select>
          <Input type="number" {...register("area")} placeholder="Area"></Input>
          <Input
            type="text"
            {...register("lName")}
            placeholder="Last Name"
          ></Input>
          <Input
            type="text"
            {...register("fName")}
            placeholder="First Name"
          ></Input>
          <Input
            type="text"
            {...register("mName")}
            placeholder="Middle Name"
          ></Input>
          <Input
            type="text"
            {...register("lotNumber")}
            placeholder="Lot Number"
          ></Input>
          <Input
            type="text"
            {...register("tctNumber")}
            placeholder="TCT Number"
          ></Input>
          <Input
            type="text"
            {...register("areaHectares")}
            placeholder="Area in hectares"
            value={areaVal ? 0 : Number(areaVal)}
          ></Input>
          <InputReadonly
            type="text"
            {...register("zoningCode")}
            placeholder="Zoning Code"
            value={tmarker}
          ></InputReadonly>
          <InputReadonly
            type="text"
            {...register("zoningClassification")}
            placeholder="Zoning Classification"
            value={landuse}
          ></InputReadonly>
          <InputReadonly
            type="text"
            {...register("coordinates")}
            placeholder="Coordinates"
            value={resetCoor}
          ></InputReadonly>
          <Input
            type="text"
            {...register("orNumber")}
            placeholder="OR Number"
          ></Input>
          <Input
            type="date"
            {...register("orDate")}
            placeholder="OR Date"
          ></Input>
          <Input
            type="number"
            {...register("amountPaid")}
            placeholder="Amount Paid"
          ></Input>
          <Button onClick={handleSubmit(onSubmit)}>Save</Button>
        </ZoningFormWrapper>
      </form>
      <Button onClick={() => handleReset()}>Reset</Button>
    </>
  );
}

export default ZoningForm;
