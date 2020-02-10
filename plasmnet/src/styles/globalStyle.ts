import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";
import { theme } from "./theme";

export const customMedia = generateMedia({
  desktop: "1296px",
  laptop: "1172px",
  tabletPro: "920px",
  tablet: "768px",
  tabletSmall: "700px",
  mobile: "400px"
});

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

/* To make footer attached to the bottom  */
/* Need to define 'flex: 1;' in the div above the footer  */
#root {
  height: 100%;
  display: flex;
  flex-direction: column;
}

body {
  background-color: ${theme.colors.creamWhite};
  color: ${theme.colors.black};
  position: relative;
  margin: 0;
  font-style: normal;
  height: 100%;
  padding: 10px 20px;
}
`;
