import { createGlobalStyle } from "styled-components";
import "../assets/font/font.css";
import reset from "styled-reset";

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
`;
