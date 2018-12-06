import React from "react";
import { ThemeConsumer } from "./ThemeContext";
import Button from "./Button";
import Hero from "./Hero";

const App = () => (
  <ThemeConsumer>
    {({ setValue }) => (
      <Hero>
        <Button variant="secondary" onClick={setValue}>
          Theme Toggle
        </Button>
      </Hero>
    )}
  </ThemeConsumer>
);

export default App;
