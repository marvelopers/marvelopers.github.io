import styled from "@emotion/styled";
import { MAX_SCREEN_OFFSET, SCREEN_OFFSET } from "styles/layout";

export const Header = styled.header`
  width: 100vw;
  padding: 18px 0px;
  height: 56px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 0px 15px;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    height: 68px;
  }
`;

export const Logo = styled.div`
  width: 120px;
  height: 18px;
  cursor: pointer;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    width: 160px;
    height: 24px;
  }
`;

export const Wrapper = styled.section`
  width: 100vw;
  padding: 0 20px;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${MAX_SCREEN_OFFSET}px;
    width: 100%;
    margin: auto;
    padding: 0;
  }
`;

export const Categories = styled.ul`
  display: none;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      font-size: 16px;
      margin: 0px 20px;
      padding: 5px 10px;
    }
  }
`;
