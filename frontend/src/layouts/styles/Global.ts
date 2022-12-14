import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  body {
    width: 100%;
    height: 100%;
  }
`
export default GlobalStyle;
