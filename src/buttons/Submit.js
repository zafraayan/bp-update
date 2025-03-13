import React from "react";
import styled from "styled-components";
import "../index.css";

const ButtonStyle = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  /* background-color: rgb(0, 0, 0); */
  color: white;
  font-size: 24px;
  place-content: center;

  div {
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    margin: auto;
    text-align: center;
    background-color: #000000;
    transition: background-color ease-in 0.2s;
    font-weight: 800;

    &:hover {
      background-color: var(--bodyText);
      color: black;
      cursor: pointer;
    }
  }
`;

function Submit({ children }) {
  return (
    <ButtonStyle>
      <div>{children}</div>
    </ButtonStyle>
  );
}

export default Submit;
