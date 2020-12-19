import { Link } from 'gatsby';
import React from 'react';
import styled from "styled-components";
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <StyleHeader>
      <div className="wrapper">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul className="categories">
            <Link to={"/front"}><li>Front-end</li></Link>
            <Link to={"/script"}><li>JS/TS</li></Link>
            <Link to={"/react"}><li>React</li></Link>
            <Link to={"/marketing"}><li>Marketing</li></Link>
            <Link to={"/essay"}><li>Essay</li></Link>
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
    /* border: 1px solid #E8E8E8; */
    height: 32px;
  }
  .wrapper{
    /* border: 1px solid #E8E8E8; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: calc(1020px - (20px * 2)); 
  }

  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    text-decoration: none;
  }

  li{
    font-size: 16px;
    margin: 0px 20px;
    padding: 5px 10px;
  }
`;