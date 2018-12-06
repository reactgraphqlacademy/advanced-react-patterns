import React from "react";
import Example from "./example";
import Exercise from "./exercise";
import Bonus from "./bonus";

const Page = props => (
  <div>
    <h2>Theming</h2>
    <p>
      styled-components has full theming support by exporting a{" "}
      <code>ThemeProvider</code> wrapper component. This component provides a
      theme to all React components underneath itself via the context API. In
      the render tree all styled-components will have access to the provided
      theme, even when they are multiple levels deep.
    </p>
    <p>
      Using a theme help us to share values and styles through out all styled
      components. you can see the theme we are using in
      <code>src/components/patterns/Theming/example/theme.js</code>. On every
      styled component you will have access to a <code>theme</code> prop
      attached to component props.
    </p>
    <h3>Example</h3>
    <Example />
    <hr />
    <h3>Exercise</h3>
    <p>go to <code>src/components/patterns/Theming/exercise/index.jsx</code> and start doing the TODOs mentioned in that file!</p>
    <Exercise />
    <hr />
    <h3>Bonus</h3>
    <p>
      The goal here is to create a <code>ThemeProvider</code> component able to
      toggle the theme passed to the styled-component ThemeProvider.
    </p>
    <p>This component should do 2 things:</p>
    <ul>
      <li>keep track of the selected state</li>
      <li>
        sets the new theme to the styled-component's <code>ThemeProvider</code>
      </li>
    </ul>

    <p>
      Also, in order to toggle the theme, you need to use the{" "}
      <code>ThemeContext.Consumer</code> in order to get access to the function
      that toggles the state in your ThemeProvider. You have some hints here:
      -EXAMPLE THEME-
    </p>
    <div style={{marginBottom: 100}}>
      <Bonus />
    </div>
  </div>
);

export default Page;
