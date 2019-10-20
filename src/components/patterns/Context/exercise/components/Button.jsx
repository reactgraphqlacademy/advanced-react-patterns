import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeProvider";

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  color: white;
  background-color: black;
`;

const Button = ({ onClick, children, ...rest }) => (
  <StyledButton onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
