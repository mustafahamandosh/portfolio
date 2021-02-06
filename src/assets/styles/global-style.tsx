import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-align: center;
  }

  body {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #8c8c8e;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.5px;
    line-height: 1.5;
    background: #fff;
    text-align: left;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fafafc;
  }

  p {
    font-size: 11px;
    text-align: center;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }

  h6 {
    font-size: 12px;
    font-weight: 400;
  }
`;
