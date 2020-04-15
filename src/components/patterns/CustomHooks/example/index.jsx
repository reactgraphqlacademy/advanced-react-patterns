/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import UseCallbackOrMemo from "./UseCallbackOrMemo";

// const calculateValue = (a, b) => a + b;

// export const useIncrement = (initialValue, calculateValue) => {
export const useIncrement = (initialValue) => {
  const [count, setCount] = useState(initialValue || 0);
  // 👩‍🏫 the value of the increment could be resolved by a function that is passed to the useIncrement (e.g. inversion of control)
  // const increment = (value = 1) => setCount(calculateValue(count, value));
  const increment = (value = 1) => setCount(count + value);

  return { count, increment };
};

// Using a custom hook
// const ExampleComponent = (props) => {
//   const { count, increment } = useIncrement(props.initialValue);

//   return (
//     <p>
//       <button onClick={() => increment()}>Increment</button>
//       current count: {count}
//     </p>
//   );
// };

const ExampleComponent = (props) => {
  const { count, increment } = useIncrement(props.initialValue);

  return (
    <p>
      <button onClick={() => increment()}>Increment</button>
      Current count: {count}
    </p>
  );
};

const Example = () => (
  <React.Fragment>
    <h3>👩‍🏫 Example</h3>
    <p>
      A React Hook is a function that lets us reuse component logic across
      different function components. Component logic is:
    </p>
    <ul>
      <li>State</li>
      <li>Lifecyle</li>
      <li>Context</li>
    </ul>
    <p>A custom Hook is a function that calls another Hook</p>

    <p>
      Custom Hooks documentation{" "}
      <a
        href="https://reactjs.org/docs/hooks-custom.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://reactjs.org/docs/hooks-custom.html
      </a>
    </p>
    <ExampleComponent initialValue={5} />
    <p>
      File:<code> src/components/patterns/CustomHooks/example/index.jsx</code>
    </p>
    <hr />
    <UseCallbackOrMemo />
  </React.Fragment>
);

export default Example;
