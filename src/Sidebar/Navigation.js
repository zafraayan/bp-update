import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { navItems } from "./array/arrays";
import { setSliceId } from "../businessSlice";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Dashboard = styled.div`
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  margin: auto;
  height: auto;
  margin-bottom: 20px;
  background-color: black;
  text-align: center;
  font-weight: 700;
`;

const NavItemsWrapper = styled.div`
  width: 100%;
  height: auto;
  /* padding: 10px; */
  padding: 10px 10px 10px 40px;
  text-indent: 5px;
  background-color: var(--colorTwo);
  display: flex;
  margin: auto;
  border: solid 1px rgb(66, 66, 66);
  background-color: #000000;
  /* gap: 10px; */

  /* padding-left: 30px; */
  /* border: solid 1px white; */

  &:hover {
    /* background-color: var(--colorSeven); */
    background-color: var(--colorFive);
    color: white;
    cursor: pointer;
  }
`;

const DropwDown = styled.div`
  /* margin: 0px 0px 0px 10px; */
  line-height: 1;
`;

const SubMenu = styled(NavItemsWrapper)`
  padding-left: 60px;
  text-indent: 5px;
`;

function Navigation() {
  const [sub, setSub] = useState(false);
  const [id, setId] = useState();
  const [toggle, setToggle] = useState();
  const [rotate, setRotate] = useState({
    toggle: true,
    rotation: "",
  });

  const dispatch = useDispatch();

  function subItem(sub, id, title) {
    sub.length > 0 ? setToggle(true) : setToggle(false);
    setSub(sub.length);
    setId(id);
    dispatch(setSliceId(title));
    setRotate({ ...rotate, rotation: "180deg" });
  }

  function handleSub(id, title) {
    dispatch(setSliceId(title));
  }
  // console.log(value);
  return (
    <Wrapper>
      <Dashboard>Dashboard</Dashboard>
      {navItems.map((el, i) => (
        <>
          <NavItemsWrapper
            // onMouseLeave={() => setSub(false)}
            onClick={() => subItem(el.subMenu, el.id, el.title)}
          >
            {el.icon}
            {el.title}
            {el.subMenu.length > 0 && (
              <DropwDown rot={rotate.rotation}>
                <FaArrowAltCircleDown />
              </DropwDown>
            )}
          </NavItemsWrapper>
          {toggle && sub && id === el.id
            ? el.subMenu.length > 0 &&
              el.subMenu.map((el, i) => (
                <SubMenu onClick={() => handleSub(el.id, el.title)}>
                  <>
                    {el.icon}
                    {el.title}
                  </>
                </SubMenu>
              ))
            : null}

          {/* {sub && id === el.id
            ? el.subMenu.length > 0 &&
              el.subMenu.map((el, i) => <SubMenu>{el.title}</SubMenu>)
            : null} */}
        </>
      ))}
    </Wrapper>
  );
}

export default Navigation;
