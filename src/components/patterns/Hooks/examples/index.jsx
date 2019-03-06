import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";

const Examples = () => (
  <React.Fragment>
    <h3>Examples</h3>
    <hr />
    <h4>State Hook</h4>
    <UseState />
    <hr />
    <h4>Effect Hook Example</h4>
    <UseEffect />
    <hr />
  </React.Fragment>
);

export default Examples;
