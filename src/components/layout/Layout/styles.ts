import styled from '@emotion/styled';
import { TABLET_SCREEN_OFFSET } from 'src/styles/layout';

export const Layout = styled.main`
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: 100vw;
  }
`;

export const BlogLayout = styled.main`
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Content = styled.section`
  font-size: 16px;
  line-height: 1.8;
  width: 720px;
`;
