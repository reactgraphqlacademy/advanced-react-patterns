import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Button = styled("button")`
  background: white;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 800;
  padding: 8px 16px;
  transition: all 0.2s ease;
  color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.blue};

  &:hover {
    color: ${props => props.theme.colors.green};
    border: 2px solid ${props => props.theme.colors.green};
  }
`;

const Wrapper = styled("div")`
  padding: 40px;
  background: ${props => props.theme.colors.background};
`;

const ThemingExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button>My Styled theme Button</Button>
    </Wrapper>
  </ThemeProvider>
);

export default ThemingExample;
