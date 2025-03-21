import React from "react";
import styled from "styled-components";
import { requirements } from "../../Sidebar/array/arrays";

const RequirementsWrapper = styled.div`
  background-color: black;
  width: 97%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;

  .radios {
    width: 16px;
  }
`;

const Header = styled.div`
  height: auto;
  flex: 1;
`;

const ReqItems = styled.div`
  gap: 10px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  place-content: center;

  div {
    width: 30%;
    display: flex;
    gap: 10px;
    place-content: baseline;
    align-items: center;
  }
`;

function Requirements({ reg }) {
  return (
    <RequirementsWrapper>
      <Header>
        <h2>Requirements</h2>
      </Header>

      <ReqItems>
        {requirements.map((el) => (
          <div>
            <input
              className="radios"
              type="checkbox"
              value={el.title && true}
              {...reg(el.fields)}
              //   onClick={() => alert(el.title)}
            ></input>
            <label>{el.title}</label>
          </div>
        ))}
      </ReqItems>
    </RequirementsWrapper>
  );
}

export default Requirements;
