import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from 'assets/styles/global-style';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
