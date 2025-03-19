import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  barangay,
  decision,
  errorMessage,
  inspector,
  legalBasis,
  production,
  zoningClassification,
} from "../Sidebar/array/arrays";
import Misc from "../buttons/Misc";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import Error from "./Error";
import Crud from "../database/Crud";
import { useDispatch, useSelector } from "react-redux";
import { setDisable } from "../businessSlice";
import { formatNumber } from "../helpers/formatNumber";

const RegistrationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 10px;
  place-content: center;
  margin: auto;

  input,
  select {
    font-family: "Inter", serif;
    width: 32%;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    text-align: center;
  }

  .header {
    display: flex;
    width: 100% !important;
    text-align: center;

    div {
      flex: 1;
    }
  }

  .date {
    width: 100% !important;
    text-align: center;
  }

  .zoningClassification {
    display: flex;
    width: 97.5%;
    gap: 10px;
    flex-wrap: wrap;

    select,
    label {
      flex: 1;
    }
  }
`;

const ButtonStyle = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 24px;
  place-content: center;
  border: none;
  margin-top: 20px;
  pointer-events: ${(props) => props.disability};

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

const ZonClass = styled.div`
  width: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    gap: 10px;
  }

  div:nth-child(2) {
    display: flex;
    gap: 10px;

    label {
      flex: 1;
      margin-top: 5px;
      font-size: 11px;
    }
  }
`;

const Note = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;

function Registration(e) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [entries, setEntries] = useState();
  const [series, setSeries] = useState();
  const disable = useSelector((state) => state.business.disable);
  const dispatch = useDispatch();
  // const [lastElement, setLastElement] = useState();

  function onSubmit(data1) {
    createmutation.mutate(data1);
  }

  const { useData, useInsert } = Crud();
  const { data: records, error, isLoading } = useData();
  const createmutation = useInsert(reset);

  const allValues = watch();
  const zaf = Object.values(allValues).filter((el) => !el);

  const capital = watch("busCapital", "");
  const decNumber = watch("decisionNumber", "");

  useEffect(() => {
    zaf.length > 0
      ? dispatch(setDisable("none"))
      : dispatch(setDisable("auto"));
  }, [zaf]);

  if (error) console.log(error);
  if (isLoading) return <p>Loading....</p>;
  // if (records) {
  // const lastElement = ;
  // setLastElement(() => records.at(-1));
  // }

  const lastElement = records.sort((a, b) => a.id - b.id).at(-1);

  return (
    <>
      <Toaster />

      <form>
        <RegistrationWrapper>
          <div className="header">
            <div></div>
            <div>
              <h2>Registration</h2>
            </div>
            <div className="misc">
              <Misc />
            </div>
          </div>
          <div className="date">
            <input
              type="date"
              {...register("date", {
                required: true,
              })}
            ></input>
          </div>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lName")}
          ></input>
          <input
            type="text"
            placeholder="First Name"
            {...register("fName")}
          ></input>
          <input
            type="text"
            placeholder="Middle Name"
            {...register("mName")}
          ></input>

          {/* ------------LineBreak--------------- */}
          <input
            type="text"
            placeholder="Street or Building"
            {...register("building", { required: true })}
          ></input>
          <select {...register("barangay")}>
            {barangay.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="City"
            defaultValue="City of Talisay"
            {...register("city", { required: true })}
          ></input>
          {/* ------------LineBreak--------------- */}
          <select {...register("production")}>
            {production.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Contact Number"
            {...register("cNumber", {
              required: true,
              min: { value: 1 },
            })}
          ></input>

          <select {...register("decision")}>
            {decision.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
          {/* ------------LineBreak--------------- */}
          <input type="text" placeholder="Name of Corporation"></input>
          <input
            type="text"
            placeholder="Name of Business"
            {...register("busName", { required: true })}
          ></input>
          <input
            type="text"
            placeholder="Business Type"
            {...register("busType", { required: true })}
          ></input>
          <input
            type="text"
            placeholder="Business Capital"
            value={formatNumber(capital)}
            onChange={(e) =>
              setValue("busCapital", e.target.value.replace(/,/g, ""))
            }
            {...register("busCapital", { required: true, min: { value: 0 } })}
          ></input>
          <input
            type="number"
            placeholder="Number of Male Employee"
            {...register("male", {
              required: true,
              min: { value: 0 },
            })}
          ></input>
          <input
            type="number"
            placeholder="Number of Female Employee"
            {...register("female", { required: true, min: { value: 0 } })}
          ></input>
          {/* ------------LineBreak--------------- */}
          <div className="header">
            <div></div>
            <h2>Zoning Classification</h2>
            <div></div>
          </div>
          <ZonClass>
            <div>
              <select {...register("front")}>
                {zoningClassification.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
              <select {...register("left")}>
                {zoningClassification.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
              <select {...register("back")}>
                {zoningClassification.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
              <select {...register("right")}>
                {zoningClassification.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Front</label>
              <label>Left</label>
              <label>Back</label>
              <label>Right</label>
            </div>
          </ZonClass>
          {/* <div className="zoningClassification">
            
          </div> */}
          {/* ------------LineBreak--------------- */}
          <select {...register("zonClassification")}>
            {zoningClassification.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Area"
            // {...register("area", { required: true, min: { value: 1 } })}
          ></input>
          <select {...register("legalBasis")}>
            {legalBasis.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>

          {/* ------------LineBreak--------------- */}
          <input
            type="text"
            placeholder="OR Number"
            {...register("orNumber", { required: true })}
          ></input>
          <input
            type="date"
            {...register("orDate", { required: true })}
          ></input>
          <input
            type="number"
            placeholder="Amount Paid"
            {...register("amountPaid", { required: true, min: { value: 1 } })}
          ></input>
          <select {...register("inspector")}>
            {inspector.map((el, i) => (
              <option key={i}>{el.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Decision Number"
            {...register("decisionNumber", { required: true })}
            // value={`CZC-07-${new Date().getFullYear()}-${lastElement?.id + 1}
            onChange={(e) => setValue("decisionNumber", e.target.value)}
            value={decNumber}
            // style={{ pointerEvents: "none", color: "gray" }}
          ></input>
        </RegistrationWrapper>
        <ButtonStyle
          title="Complete the fields to submit entry"
          // disability={disable}
          onClick={handleSubmit(onSubmit)}
        >
          SUBMIT
        </ButtonStyle>
        <Note>Complete all the fields to enable the submit button</Note>
        {errorMessage.map(
          (el) => errors[el.name] && <Error>{el.message}</Error>
        )}
      </form>
    </>
  );
}

export default Registration;
