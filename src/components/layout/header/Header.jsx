import React from 'react';
import styled from "styled-components";
import { GREY_1 } from '../../../styles/styleVariables'
import { logo } from '../../../images/logo.png'

const Header = () => {
  return (
    <StyleHeader>
      <img src={`${logo}`} alt="logo"/>
      <ul className="categories">
        <li>Front-end</li>
        <li>JS/TS</li>
        <li>React</li>
        <li>Marketing</li>
        <li>Essay</li>
      </ul>
    </StyleHeader>
  );
}

export default Header;

const StyleHeader = styled.nav`
  width: 100vw;
  height: 68px;
  border: 1px solid ${GREY_1};
  display: flex;
  justify-content: space-evenly;
  ul{
    border: 1px solid ${GREY_1};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li{
    font-size: 18px;
    border: 1px solid ${GREY_1};
    align-content: center;
    margin: 0px 20px;
  }
`;