import React, { ReactNode } from 'react';
import GlobalStyle from '../../../styles/GlobalStyle';
import * as S from './styles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <S.Layout>{children}</S.Layout>;
    </>
  );
};

export default Layout;
