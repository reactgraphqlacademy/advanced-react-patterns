import React from "react";
import "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Closure</h2>
    <h3>Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/functional-programming/closure/exercise.js"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      Implement the <code>function add()</code> in
      `src/components/functional-programming/closure/exercise` so
      <code>addFive(7)</code> outputs 12
    </p>
    <p>You can look at the console to see the result</p>
    <h3>Discussion about the solution</h3>
    <p>1- Is the inner function pure?</p>
    <p>2- Wnat is executed first, the inner of the outer function?</p>
  </React.Fragment>
);

export default Page;
