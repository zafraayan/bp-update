import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import styled from "styled-components";
import "./index.css";
import Registration from "./Components/Registration";
import { navItems } from "./Sidebar/array/arrays.js";
// import { useSelector } from "/react-redux";-
import { useSelector } from "react-redux";
import { IoMdSettings } from "react-icons/io";
import PrintDownload from "./Components/PrintDownload.js";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FaPrint } from "react-icons/fa";
import Misc from "./buttons/Misc.js";
import BpRecords from "./Components/BpRecords.js";
import Reports from "./Components/Reports.js";
import { NavContext } from "./context/context.js";
import ZoningCertificate from "./Sidebar/navComponents/ZoningCertificate.js";

const Wrapper = styled.div`
  display: flex;
  background-color: #525d64;
  color: #ffffff;
  height: 100dvh;
  width: 80dvw;
  min-width: 1024px;
  min-height: 726px;
  margin: auto;
`;

const SidebarWrapper = styled.div`
  /* width: 20%; */
  min-width: 300px;
  background-color: var(--background);
  color: var(--bodyText);
`;

const MainWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const HeaderWrapper = styled.div`
  height: 5%;
  font-size: 24px;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  color: var(--bodyText);
`;

const BodyWrapper = styled.div`
  height: 90%;
`;

const FooterWrapper = styled.div`
  height: 5%;
`;

function Home() {
  const [comps, setComps] = useState();
  const [homeSub, setHomeSub] = useState();
  const title = useSelector((state) => state.business.title);

  useEffect(() => {
    const ian = navItems.filter((el) => el.title === title);
    ian.map((el) => setComps(el.component));

    const subArray = [];
    const subArrTitles = [];
    navItems.map(
      (el) => el.subMenu.length > 0 && el.subMenu.map((el) => subArray.push(el))
    );

    const me = subArray.filter((el) => el.title === title);
    me.length > 0 && me.map((el) => setComps(el.component));
  });

  return (
    <Wrapper>
      <NavContext.Provider value={{ comps, setComps }}>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MainWrapper>
          <HeaderWrapper></HeaderWrapper>
          <BodyWrapper>
            {comps}
            {/* <BpRecords /> */}
          </BodyWrapper>

          {/* <FooterWrapper>Footer</FooterWrapper> */}
        </MainWrapper>
      </NavContext.Provider>
    </Wrapper>
  );
}

export default Home;
