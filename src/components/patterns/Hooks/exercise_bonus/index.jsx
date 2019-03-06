import React from "react";
import WithWidth from "./WithWidth";

const Bonus = () => (
  <React.Fragment>
    <h3>Bonus</h3>
    <p>
      Refactor the <code>src/patterns/Hooks/bonus/WithWidth.jsx</code> using the{" "}
      <code>useState</code> and <code>useEffect</code> Hooks.
    </p>
    <p>
      Tip: to remove the event listeners we need to use the clean up phase of
      the effect. To clean up the side effects you must return a function.
    </p>
    <WithWidth />
  </React.Fragment>
);

export default Bonus;
