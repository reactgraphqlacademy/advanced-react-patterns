import React from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";
import Hero from "./Hero";

const App = () => (
  <ThemeContext.Consumer>
    {({ setValue }) => (
      <Hero>
        <Button variant="secondary" onClick={setValue}>
          Theme Toggle
        </Button>
      </Hero>
    )}
  </ThemeContext.Consumer>
);

export default App;
