import React from "react";
import Example from "./example";
import Exercise from "./exercise";

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
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/Theming/example"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <Example />
    <hr />
    <h3>Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/Theming/exercise"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <div style={{ marginBottom: 100 }}>
      <Exercise />
    </div>
  </div>
);

export default Page;
