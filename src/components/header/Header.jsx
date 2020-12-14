import React from 'react';
import styled from "styled-components";
import { GREY_1 } from '../../styles/styleVariables'
import { logo } from '../../images/logo.png'

const Header = () => {
  return (
    <StyleHeader>
      <div className="wrapper">
        <img src={`${logo}`} alt="logo"/>
        <nav>
          <ul className="categories">
            <li>Front-end</li>
            <li>JS/TS</li>
            <li>React</li>
            <li>Marketing</li>
            <li>Essay</li>
            {/* TODO GIT  */}
          </ul>
        </nav>
      </div>
    </StyleHeader>
  );
}

export default Header;

const StyleHeader = styled.header`
  width: 100vw;
  padding: 18px 0px;
  height: 68px;
  justify-content: center;
  box-shadow : rgba(0, 0, 0, 0.068) 0px 0px 15px;
  img{
    border: 1px solid ${GREY_1};
    width: 100px;
  }
  .wrapper{
    border: 1px solid ${GREY_1};
    display: flex;
    justify-content: space-between;
    max-width: calc(980px - (30px * 2));
    /* max-width: 980px; */
  }

  nav{
  }

  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li{
    font-size: 18px;
    color: ${GREY_1};
    align-content: center;
    margin: 0px 20px;
    padding: 5px 10px;
  }
`;