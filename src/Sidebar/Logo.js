import React from "react";
import styled from "styled-components";
import cpdclogo from "./images/cpdclogo.jpg";
import talisaylogo from "./images/talisaylogo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: auto;
  width: 80%;
  gap: 10px;
  padding: 10px;
  text-align: center;

  .zaf {
    display: flex;
    place-content: center;
    /* flex-wrap: wrap; */
    gap: 10px;
  }

  img {
    width: 100px;
    border-radius: 50%;
  }
`;

function Logo() {
  return (
    <Wrapper>
      <div className="zaf">
        <img src={cpdclogo}></img>
        <img src={talisaylogo}></img>
      </div>
      <h1>PERMIT FLOW</h1>
      <h6>Developed by: Zaf</h6>
    </Wrapper>
  );
}

export default Logo;
