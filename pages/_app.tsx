import type { AppProps } from 'next/app';

// import dynamic from 'next/dynamic';
// import Head from 'next/head';
import { GlobalStyle } from 'src/styles/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
