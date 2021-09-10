import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "din-condensed-web", Helvetica Neue, Helvetica, Arial, sans-serif;
  
}

.icon {
  width: 23px;
  height: 23px;
}


`;

export default GlobalStyles;
