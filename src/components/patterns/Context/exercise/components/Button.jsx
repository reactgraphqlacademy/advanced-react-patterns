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

const Button = ({ children, ...rest }) => {
  // TODO 4, use the useTheme in the Button.jsx component in this folder
  const { toggleTheme } = () => console.log("BUTTON CLICKED!");

  return (
    <StyledButton onClick={toggleTheme} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
