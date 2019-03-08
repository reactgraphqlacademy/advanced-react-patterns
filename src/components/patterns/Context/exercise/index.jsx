import React from "react";
import ThemeProvider from "./components/ThemeProvider";
import App from "./components/App";

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
