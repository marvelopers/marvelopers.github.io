import React from 'react';
import styled from '@emotion/styled';
import { TABLET_SCREEN_OFFSET } from 'src/styles/layout';
import { GREY_5 } from 'src/styles/colors';

const Footer = () => (
  <Wrapper>
    <Copyright>© copyright 2022 marveloper All rights reserved.</Copyright>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.footer`
  border-top: 1px solid ${GREY_5};
  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: calc(100vw - 20px);
    margin: auto;
  }
`;

const Copyright = styled.section`
  margin: 30px auto;
  max-width: calc(1020px - (20px * 2));
  height: 40px;
`;
