import { createGlobalStyle } from "styled-components";
import "./assets/font/font.css";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family: "Pretendard";
  }

  #root {
    width: 100vw;
    height: 100vh;
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
