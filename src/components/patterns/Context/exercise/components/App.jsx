import React from "react";
import { useTheme } from "./ThemeProvider";
import Button from "./Button";
import Hero from "./Hero";

// TODO 4, use the useTheme and pass the toggleTheme to the onClick prop of the Button component

const App = () => {
  return (
    <Hero>
      <Button onClick={() => {}}>Theme Switcher</Button>
    </Hero>
  );
};

export default App;
