import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div className="wrapper">
        © Copyright 2020 marveloper All rights reserved.
      </div>
      {/* git */}
      {/* contact */}
    </StyledFooter >
  );
}

export default Footer;

const StyledFooter = styled.footer`
    border-top: 1px solid #E8E8E8;
  .wrapper{
    margin: 30px auto;
    max-width: calc(1020px - (20px * 2));
  }
`;