import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body{
  background: #0f0e17;
  height:100%;
  overflow:hidden;
  padding:0;
  margin:0;
  box-sizing:border-box;
}

body {
  height:100%;
}
#root{
  height:100%;
}
`;

export default GlobalStyle;
