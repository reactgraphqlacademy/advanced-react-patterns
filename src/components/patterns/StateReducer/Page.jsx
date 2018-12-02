import React from "react";
import Example from "./example";
// import "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>State Reducer</h2>
    <p>
      State reducer allows consumers to control how the state is managed. This
      means the consumer has controller over some logic in the parent, not just
      on the rendering. This is very useful in combination with the Render
      Props.
    </p>
    <h3>Example</h3>
    <Example />

    <h3>Exercise</h3>
  </React.Fragment>
);

export default Page;
