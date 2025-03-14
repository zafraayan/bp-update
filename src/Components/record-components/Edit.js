import React, { use, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Crud from "../../database/Crud";
import { setDisable, setEditPopup } from "../../businessSlice";
import { Toaster } from "react-hot-toast";
import Misc from "../../buttons/Misc";
import {
  barangay,
  decision,
  errorMessage,
  inspector,
  legalBasis,
  production,
  zoningClassification,
} from "../../Sidebar/array/arrays";
import Error from "../Error";
import { formatNumber } from "../../helpers/formatNumber";

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
  /* pointer-events: ${(props) => props.disability}; */

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

const CloseButton = styled.div`
  /* width: 50px; */
  width: 100px;
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  color: white;
  justify-self: right;
  transition: background-color ease-in 0.2s;

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

function Edit({ selected }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({});

  const disable = useSelector((state) => state.business.disable);
  const dispatch = useDispatch();

  const { useData, useUpdateItem } = Crud();
  const { data: records } = useData();
  const updateMutation = useUpdateItem();

  function handleClose() {
    dispatch(setEditPopup({ state: false }));
  }

  const forUpdate = records.find((el) => el.id === Number(selected));
  const watchedValues = watch();

  const capital = watch("busCapital", "");

  useEffect(() => {
    if (forUpdate) {
      reset(forUpdate); // Set fetched data as default values
    }

    console.log(forUpdate);
  }, [forUpdate, reset]);

  function handleUpdate(e) {
    e.preventDefault();
    updateMutation.mutate({
      id: selected,
      updatedItem: watchedValues,
    });
  }

  return (
    <>
      <CloseButton onClick={handleClose}>Close</CloseButton>

      <form>
        <RegistrationWrapper>
          <div className="header">
            <div></div>
            <div>
              <h2>Edit Records</h2>
            </div>
            <div className="misc">{/* <Misc /> */}</div>
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
            {...register("lName", {
              required: true,
            })}
          ></input>
          <input
            type="text"
            placeholder="First Name"
            {...register("fName", { required: true })}
          ></input>
          {errors.fName && <span>Error Occured</span>}
          <input
            type="text"
            placeholder="Middle Name"
            {...register("mName", { required: true })}
          ></input>
          {/* ------------LineBreak--------------- */}
          <input
            type="text"
            placeholder="Street or Building"
            {...register("building", { required: true })}
          ></input>
          <select {...register("barangay", { required: true })}>
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
            {...register("cNumber")}
          ></input>

          <select {...register("decision")}>
            {decision.map((el, i) => (
              <option key={i}>{el}</option>
            ))}
          </select>
          {/* ------------LineBreak--------------- */}
          <input
            type="text"
            placeholder="Name of Corporation"
            {...register("corpName", { required: true })}
          ></input>
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
              setValue("amount", e.target.value.replace(/,/g, ""))
            }
            {...register("busCapital", { required: true, min: { value: 1 } })}
          ></input>
          <input
            type="number"
            placeholder="Number of Male Employee"
            {...register("male")}
          ></input>
          <input
            type="number"
            placeholder="Number of Female Employee"
            {...register("female")}
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
          <input type="number" placeholder="Area" {...register("area")}></input>
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
            {...register("amountPaid")}
          ></input>
          <select {...register("inspector")}>
            {inspector.map((el, i) => (
              <option key={i}>{el.name}</option>
            ))}
          </select>
        </RegistrationWrapper>
        <ButtonStyle
          title="Complete the fields to submit entry"
          disability={disable}
          onClick={handleUpdate}
        >
          UPDATE
        </ButtonStyle>
        <Note>Complete all the fields to enable the submit button</Note>
        <Toaster position="bottom-center" style={{ zIndex: "1" }} />
        {errorMessage.map(
          (el) =>
            errors[el.name] && (
              <div style={{ position: "fixed", top: "0", right: "0" }}>
                <Error>{el.message}</Error>
              </div>
            )
        )}
      </form>
    </>
  );
}

export default Edit;
