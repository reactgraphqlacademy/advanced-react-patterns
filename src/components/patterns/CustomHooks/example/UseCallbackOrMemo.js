/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useMemo, useCallback, useEffect } from "react";
import { useIncrement } from "./index";

const computeExpensiveValue = (a, b) => {
  console.log("[custom hooks exercise] computing expensive value");

  return a * b;
};

const UseCallbackOrMemo = ({ a = 1, b = 2 }) => {
  const { count, increment } = useIncrement();
  // useMemo returns a value
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  // useCallback returns a function
  const memoizedCallback = useCallback(increment, []);

  useEffect(() => {
    memoizedCallback();
    // 👩‍🏫 increment instead of memoizedCallback and you'll get an infinite loop
    // increment();
  }, [memoizedCallback]);

  /*
 👩‍🏫 Do:
    - Go to http://localhost:3000/custom-hooks
    - Open the console on the dev tools
    - Click on the "Increment 🍄" button
    - You should only see one "[custom hooks exercise] computing expensive value"
  */

  return (
    <React.Fragment>
      <h3>🥑 Before the exercise 🏋️‍♀️</h3>
      <h4>useMemo</h4>
      <blockquote>
        Returns a memoized <strong>value</strong>.
        <a
          href="https://reactjs.org/docs/hooks-reference.html#usememo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {` `} The docs
        </a>
      </blockquote>
      <h4>useCallback</h4>
      <blockquote>
        Returns a memoized <strong>callback</strong> (function).
        <a
          href="https://reactjs.org/docs/hooks-reference.html#usecallback"
          target="_blank"
          rel="noopener noreferrer"
        >
          {` `} The docs
        </a>
      </blockquote>
      <p>Last render on {new Date().toString()}</p>
      <p>
        memoized value: {memoizedValue}
        <br />
        <em>
          If you look at the console, you should not see "[custom hooks
          exercise] computing expensive value" on every render
        </em>
      </p>
      <p>
        <button onClick={() => increment(memoizedValue)}>Increment 🍄</button>
        current count: {count}
      </p>
      <p>
        File:
        <code>
          src/components/patterns/CustomHooks/example/UseCallbackOrMemo.jsx
        </code>
      </p>
    </React.Fragment>
  );
};

export default UseCallbackOrMemo;
