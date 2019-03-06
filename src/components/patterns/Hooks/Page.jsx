import React from "react";
import StateExample from "./example_state";
import Exercise from "./exercise";

const Page = props => (
  <div>
    <h2>Hooks</h2>
    <h3>Examples</h3>
    <hr />
    <h4>State Hook</h4>
    <StateExample />
    <hr />
    <h4>Effect Hook Example</h4>
    <hr />
    <h3>Exercise</h3>
    <Exercise />
  </div>
);

export default Page;
