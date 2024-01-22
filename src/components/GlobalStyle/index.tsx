import { createGlobalStyle } from "styled-components";
import GeistRegular from "./fonts/Geist-Regular.otf";
import GeistUltraLight from "./fonts/Geist-UltraLight.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'GeistRegular';
    src: local('Geist Regular'), local('GeistRegular'), src(${GeistRegular});
  }

  @font-face {
    font-family: 'GeistUltraLight';
    src: local('Geist UltraLight'), local('GeistUltraLight'), src(${GeistUltraLight});
  }

  body {
    background-color: #202020;
    color: #FFFFFF;
    font-family: 'GeistUltraLight';
    font-size: 14px;
    user-select: none;
  }
`;

export default GlobalStyles;
