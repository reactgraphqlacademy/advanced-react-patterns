import React from "react";
import WithWidth, { LARGE, MEDIUM } from "./WithWidth";

const Bonus = () => (
  <React.Fragment>
    <h3>Bonus</h3>
    <h4>Part 1</h4>
    <p>
      Refactor the <code>src/patterns/Hooks/bonus/WithWidth.jsx</code> using the{" "}
      <code>useState</code> and <code>useEffect</code> Hooks.
    </p>
    <p>
      Tip: to remove the event listeners we need to use the clean up phase of
      the effect. To clean up the side effects you must return a function.
    </p>
    <h4>Part 2</h4>
    <p>
      Refactor the WithWidth into a custom Hook called useWidth that can be
      reused. Documentation{" "}
      <a href="https://reactjs.org/docs/hooks-custom.html">
        https://reactjs.org/docs/hooks-custom.html
      </a>
    </p>
    <WithWidth>
      {width =>
        width === LARGE ? (
          <h1>I'm a large screen</h1>
        ) : width === MEDIUM ? (
          <h1>I'm a medium screen</h1>
        ) : (
          <h1>I'm a small screen</h1>
        )
      }
    </WithWidth>
    <br />
    <h4>Part 3</h4>
    <p>
      Replace the withWidth HoC in{" "}
      <code>src/components/patterns/CompoundComponents/Exercise/Menu</code> with
      your custom hook <code>useWidth</code>.
    </p>
  </React.Fragment>
);

export default Bonus;
