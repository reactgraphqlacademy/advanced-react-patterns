import React from "react";
import useWidth, { LARGE, MEDIUM } from "./useWidth";

const Bonus = () => {
  const width = 3;

  return (
    <React.Fragment>
      <h3>Exercise custom hooks</h3>
      <h4>Part 1</h4>
      <p>
        Refactor the{" "}
        <code>src/patterns/Hooks/exercise_custom/WithWidth.jsx</code> using the{" "}
        <code>useState</code> and <code>useEffect</code> Hooks.
      </p>
      <p>
        Tip: to remove the event listeners we need to use the clean up phase of
        the effect. To clean up the side effects you must return a function.
      </p>
      <p>
        Documentation about custom hooks{" "}
        <a href="https://reactjs.org/docs/hooks-custom.html">
          https://reactjs.org/docs/hooks-custom.html
        </a>
      </p>
      <p>
        Import your useWidth and replace the hardcoded{" "}
        <code>const width = 3</code> at the top with{" "}
        <code>const width = useWidth()</code>
      </p>

      {width === LARGE ? (
        <h1>I'm a large screen</h1>
      ) : width === MEDIUM ? (
        <h1>I'm a medium screen</h1>
      ) : (
        <h1>I'm a small screen</h1>
      )}
    </React.Fragment>
  );
};

export default Bonus;
