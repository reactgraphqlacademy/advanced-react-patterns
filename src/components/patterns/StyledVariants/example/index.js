import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import theme from "./theme";
import { variant } from 'styled-system'

const buttonStyle = variant({
  key: "buttons"
});

const Button = styled("button")`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${buttonStyle};
`;

Button.defaultProps = {
  variant: "primary"
}

const Wrapper = styled("div")`
  padding: 40px;
  background: ${props => props.theme.colors.background};
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;
