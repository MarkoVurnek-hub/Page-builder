import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  margin: 0;
  padding: 0;
}

.App {
  display: flex;
  align-items: center;
  justify-content: center;
}
*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

*::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

*::-webkit-scrollbar-thumb {
  background: #30343f;

  transition: 0.5s;
}

*::-webkit-scrollbar-thumb:hover {
  background: #434959;
}

*::-webkit-scrollbar-thumb:active {
  background: #52586a;
}

*::-webkit-scrollbar-track {
  background: #ffffff;

  border-radius: 0;
}


`;

export default GlobalStyle;
