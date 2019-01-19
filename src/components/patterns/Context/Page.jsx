import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = () => (
  <div>
    <h2>Context</h2>
    <h3>Example</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/Context/example"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <Example />
    <p>
      <em>Folder: src/components/patterns/Context/example/Modal.jsx</em>
    </p>
    <h3>Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/Context/exercise"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      We are going to create a <strong>Theme Switcher</strong> component using
      Context. If you see{" "}
      <code>src/components/patterns/Context/exercise/theme.js</code>, there are{" "}
      <strong>2 themes defined</strong>. You should be able to toggle between
      these 2 themes.
    </p>
    <p>This component should:</p>
    <ul>
      <li>
        Track the current <code>theme</code> in the state
      </li>
      <li>Implement a fucntion to toggle the theme</li>
      <li>
        pass the current theme to the <code>ThemeProvider</code> from{" "}
        <code>styled-components</code>
      </li>
    </ul>
    <p>
      In order to check if the theme is actually changing, you can refactor the{" "}
      <code>Hero</code> component (
      <code>src/components/patterns/Context/exercise/components/Hero.jsx</code>)
    </p>
    <p>
      Also, in order to toggle the theme, you need to use the{" "}
      <code>ThemeContext.Consumer</code> in order to get access to the function
      that toggles the state in your ThemeProvider.
    </p>
    <Exercise />
    <hr />
    <h3>Bonus Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/Context/xbonus"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      Implement the Redux Provider in
      <code>src/components/patterns/Context/xbonus/Provider.js</code>. Once
      implemented, use it in Root.js
    </p>
  </div>
);

export default Page;
