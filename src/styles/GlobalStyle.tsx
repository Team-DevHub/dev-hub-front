import { createGlobalStyle } from 'styled-components';
import '@public/assets/font/font.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family: "Pretendard";
  }

  body {
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
    background-color: #F9FAFB;
    position: relative;

    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
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
  
  h6 {
    font-size: 12px;
    font-weight: 600;
  }
  .ProseMirror{
    font-size: ${({ theme }) => theme.fontSize_md};
    color: ${({ theme }) => theme.color_textBlack}
  }

  .toastui-editor-contents {
    font-size: ${({ theme }) => theme.fontSize_md};
    color: ${({ theme }) => theme.color_textBlack};
    line-height: 160%;
  }

  .toastui-editor-main .toastui-editor-md-tab-style > .active {
    background-color: ${({ theme }) => theme.color_bgWhite};
  }
`;
