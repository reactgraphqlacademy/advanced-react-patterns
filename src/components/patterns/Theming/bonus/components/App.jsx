import React from "react";
// import { ThemeConsumer } from "./ThemeContext";
import Button from "./Button";
import Hero from "./Hero";

/*
  TODO:
  - import the ThemeConsumer you exported from `ThemeContext`
  - Wrap your Button with these consumer, and implement the `onClick` function in the button. (using render props + the `setValue` function)
*/

const App = () => (
  <Hero>
    <Button variant="secondary">Theme Toggle</Button>
  </Hero>
);

export default App;
