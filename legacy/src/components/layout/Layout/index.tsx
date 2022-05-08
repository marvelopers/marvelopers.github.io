import React from 'react';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

interface BlogLayoutProps {
  aside: unknown;
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <S.Layout>{children}</S.Layout>
      <Footer />
    </>
  );
};

export const BlogLayout = ({ aside, children }: BlogLayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <S.BlogLayout>
        <S.Content>
          <div className="title"></div>
          <div className="date"></div>
          <div className="post_des_wrapper"></div>
        </S.Content>
        <div className="aside">aside</div>
      </S.BlogLayout>
      <Footer />
    </>
  );
};
