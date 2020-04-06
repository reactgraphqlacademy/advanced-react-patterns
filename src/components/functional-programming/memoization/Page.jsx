import React from "react";
import "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Memoization</h2>
    <p>
      Memoization is an optimization technique that stores the results of a
      function call and returns the cached result when the same inputs are
      supplied again.
    </p>
    <h3>Exercise</h3>
    <p>
      Open the console on your browser and type [memoization exercise] in the
      console filter. You should see on the console the console.log() for this
      exercise.{" "}
    </p>
    <p>
      Given the <code>function memoize()</code> in
      `src/components/functional-programming/memoization/exercise`:
    </p>
    <p>
      1. Pair up and explain to each other how the memoize function works with
      the doEasyWork function.
      <ul>
        <li>Where is the closure? Between line X and Y</li>
        <li>What variable/s are captured in the closure?</li>
      </ul>
    </p>

    <p>
      2. Explain to each other how the memoize function works with doHardWork.
      Does the memoize function work differently?
    </p>

    <p>
      3. Bonus, refactor the memoize function so it can memoize functions with
      any number of arguments. You can use the function doAnyWork to test your
      refactored memoize function.
    </p>
  </React.Fragment>
);

export default Page;
