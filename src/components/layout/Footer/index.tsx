import React from "react";
import styled from "@emotion/styled";

import { MAX_SCREEN_OFFSET, SCREEN_OFFSET } from "styles/layout";
import { GREY_5 } from "styles/colors";

const Footer = () => (
  <Wrapper>
    <Copyright>© copyright 2022 marveloper All rights reserved.</Copyright>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.footer`
  width: 100vw;
  border-top: 1px solid ${GREY_5};

  @media (max-width: ${SCREEN_OFFSET}px) {
    margin: auto;
  }
`;

const Copyright = styled.section`
  max-width: ${MAX_SCREEN_OFFSET}px;
  margin: 30px auto;
  height: 24px;
`;
