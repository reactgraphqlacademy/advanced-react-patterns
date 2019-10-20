import React from "react";
import themes from "../theme";
import { ThemeProvider as StyledProvider } from "styled-components";

//TODO 1, create your `ThemeContext` (use React.CreateContext());

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // TODO 2, wrap the StyledProvider with your ThemeContext.Provider and share the toggleTheme function
  return <StyledProvider theme={themes[theme]}>{children}</StyledProvider>;
};

// TODO 3, implement the useTheme and share the context like the example useModal
export const useTheme = () => {};

// TODO 4, use the useTheme in the Button.jsx component in this folder

export default ThemeProvider;
