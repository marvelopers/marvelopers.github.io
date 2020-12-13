import React from 'react';
import styled from "styled-components";

function nav () {
  return (
    <StyleHeader>
    <img src="" alt="logo"/>
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

export default nav;

const StyleHeader = styled.nav`
  width: 100vw;

  display: flex;
  justify-content: space-evenly;
  ul{
    display: flex;
    justify-content: space-between;
  }
`;