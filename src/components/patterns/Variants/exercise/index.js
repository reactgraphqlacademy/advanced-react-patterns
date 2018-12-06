import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
// import { variant } from 'styled-system'

// TODO: create a variant called `alertStyle`
/*
  in order to add these new variant styles to your component,
  you need to add it to your styles AT THE END.

  *if you have questions why at the end ask us!
*/

const Alert = styled("div")`
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  font-size: 18px;
  margin: 24px;
  font-weight: 800;
  text-align: center;
`;

const Wrapper = styled("div")`
  background-color: ${props => props.theme.colors.background};
  padding: 40px;
`;

// TODO: here you have hints on how the variants should be named...
const VariantsExercise = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Alert variant="default">default alert</Alert>
      <Alert variant="success">Success alert</Alert>
      <Alert variant="error">Error alert</Alert>
      <Alert variant="warning">Warning alert</Alert>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExercise;
