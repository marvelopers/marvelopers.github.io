import styled from '@emotion/styled';
import Link from 'next/link';
import { TABLET_SCREEN_OFFSET } from 'src/styles/layout';

export const Header = styled.header`
  width: 100vw;
  padding: 18px 0px;
  height: 68px;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 0px 15px;

  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: calc(100vw - 20px);
    margin: auto;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: calc(1020px - (20px * 2));
`;

export const Logo = styled(Link)`
  cursor: pointer;
  padding-left: 8px;
`;

export const Categories = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    font-size: 16px;
    margin: 0px 20px;
    padding: 5px 10px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    display: none;
  }
`;
function NextLink(NextLink: any) {
  throw new Error('Function not implemented.');
}
