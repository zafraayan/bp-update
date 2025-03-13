import React from "react";
import { FaPrint } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import styled from "styled-components";
import "../index.css";

const SpanContainer = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  height: auto;
  justify-content: space-evenly;
`;

const Span = styled.span`
  padding: 10px;
  background-color: black;
  border-radius: 5px;
  color: var(--bodyText);

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

function Misc() {
  return (
    <SpanContainer>
      <Span>
        <MdOutlineRecordVoiceOver />
      </Span>
      <Span>
        <HiDocumentReport />
      </Span>
      <Span>
        <FaPrint />
      </Span>
      <Span>
        <IoMdSettings />
      </Span>
    </SpanContainer>
  );
}

export default Misc;
