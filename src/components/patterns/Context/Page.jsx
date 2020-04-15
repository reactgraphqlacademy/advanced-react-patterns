import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Context</h2>
    <blockquote>
      Accepts a context object (the value returned from React.createContext) and
      returns the current context value for that context. The current context
      value is determined by the value prop of the nearest
      &lt;MyContext.Provider&gt; above the calling component in the tree.{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://reactjs.org/docs/hooks-reference.html#usecontext"
      >
        React docs
      </a>
    </blockquote>
    <h3>Example</h3>
    <Example />
    <hr />
    <Exercise />
  </React.Fragment>
);

export default Page;
