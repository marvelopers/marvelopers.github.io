import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

interface BlogLayoutProps {
  // aside: unknown;
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <S.Layout>{children}</S.Layout>
    <Footer />
  </>
);

export const BlogLayout = ({ aside = '*****', children }: BlogLayoutProps) => (
  <>
    <Header />
    <S.BlogLayout>
      <S.Content>
        {/* <div className="title"></div>
        <div className="date"></div>
        <div className="post_des_wrapper"></div> */}
        {children}
      </S.Content>
      <div className="aside">{aside}</div>
    </S.BlogLayout>
    <Footer />
  </>
);
