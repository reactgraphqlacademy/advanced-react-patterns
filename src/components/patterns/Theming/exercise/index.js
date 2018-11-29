import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

/*
  Exercise TODO:
  - wrap the whole component with the `ThemeProvider` from "styled-components".
  - create a simple theme in `theme.js` and import it. (`import theme from './theme'`)
  - this theme should have the base colors for your app.
*/

/*
  remember that you can call a function inside styled-components:
  color: ${props => YOUR EXPRESSION};
*/
const Card = styled("div")`
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.1);
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  background-color: white;
`;

/*
  in this component just use the background color from the theme and asign it to this component
*/
const Wrapper = styled("div")`
  background-color: ${props => props.theme.colors.background};
  padding: 40px;
`;

const ThemingExercise = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Card>Hallo I'm a Card</Card>
    </Wrapper>
  </ThemeProvider>
);

export default ThemingExercise;
