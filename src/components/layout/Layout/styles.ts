import styled from "@emotion/styled";
import { PINK } from "styles/colors";
import { MAX_SCREEN_OFFSET, SCREEN_OFFSET } from "styles/layout";

export const Layout = styled.main`
  width: 100vw;
  height: 100%;
  margin: 0px auto;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    max-width: ${MAX_SCREEN_OFFSET}px;
    margin: auto;
  }
`;

export const BlogLayout = styled.main`
  margin: 0px auto;
  /* max-width: calc(1020px - (20px * 2)); */
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Content = styled.section`
  font-size: 16px;
  line-height: 1.8;
  width: 720px;
`;
