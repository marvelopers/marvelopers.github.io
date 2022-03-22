import React, { ReactNode } from 'react';
import * as S from './styles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
