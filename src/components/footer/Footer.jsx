import React from 'react';
import styled from "styled-components";

function Footer () {
  return (
    <StyledFooter>
      © Copyright 2020 marveloper All rights reserved.
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  color: #292929;
  max-width: calc(980px - (30px * 2));
  border: 1px solid #292929;
`;