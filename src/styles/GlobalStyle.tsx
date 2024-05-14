import { createGlobalStyle } from 'styled-components';
import '../assets/font/font.css';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family: "Pretendard";
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #F9FAFB;
  }

  #root {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    min-height: 100%;
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5 {
    color: #1D2A3D;
    font-weight: 700;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }
`;
