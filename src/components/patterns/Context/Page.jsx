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
    <h3>Bonus Exercise</h3>
    <p>
      <input type="checkbox" />
      b.1. In{" "}
      <code>
        src/components/patterns/Context/exercise/GraphQLProvider.jsx
      </code>{" "}
      we are using <code>const memoizedHashGql = memoize(hashGql);</code>.
      Should we use useMemo instead? Why?
    </p>
    <p>
      <input type="checkbox" />
      b.2. In our current implementation, although there is a cache (data key in
      our reducer) for each pair query & variables, we can only send 1 query at
      a time. How would you make it possible to send requests concurrently?
    </p>
  </React.Fragment>
);

export default Page;
