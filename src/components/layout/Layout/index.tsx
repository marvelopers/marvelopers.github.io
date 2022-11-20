import React from 'react';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

interface BlogLayoutProps {
  aside?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.Layout>{children}</S.Layout>
      <Footer />
    </>
  );
};

export const BlogPostLayout = ({ aside, children }: BlogLayoutProps) => {
  return (
    <>
      <Header />
      <S.BlogLayout>
        <S.Content>{children}</S.Content>
        <S.Aside>{aside}</S.Aside>
      </S.BlogLayout>
      <Footer />
    </>
  );
};
