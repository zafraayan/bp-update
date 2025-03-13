import React, { useEffect, useState } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  background-color: white;
  width: 300px;
  padding: 15px;
  color: #86a7a7;
  place-content: center;
  border-radius: 10px;
  position: absolute;
  top: 25px;
  right: 250px;
  background-color: black;
  gap: 5px;
  place-content: center;
  z-index: 10;

  div {
    color: red;
    font-size: 44px;
  }
`;

function Error({ children }) {
  // const [visible, setVisible] = useState(false);

  const popup = useSelector((state) => state.business.popup);

  // useEffect(() => {
  //   setVisible(true);

  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {popup && (
        <ErrorWrapper>
          <div>
            <MdOutlineReportGmailerrorred />
          </div>
          {children}
        </ErrorWrapper>
      )}
    </>
  );
}

export default Error;
