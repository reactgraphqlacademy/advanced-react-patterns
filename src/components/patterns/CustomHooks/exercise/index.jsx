import React from "react";
// import useWidth, { LARGE, MEDIUM } from "./useWidth";
// remove the following import after refactoring the Width component to a custom hook
import Width from "./useWidth";

const Bonus = () => {
  return (
    <React.Fragment>
      <hr />
      <h3>🏋️‍♀️Exercise</h3>
      <h4>
        🎯 The goal is to extract some component logic into a reusable function
        avoiding common pitfalls
      </h4>

      <h1>
        {/* Comment out the following <Width /> after implementing part 1 */}
        The width is: <Width />
        {/* Use the width value from your custom hook in the next line after you implment part 1  */}
        {/* {width} */}
      </h1>

      <h4>Part 1, refactoring</h4>

      <p>
        <input type="checkbox" /> 1. Refactor the{" "}
        <code>src/components/patterns/CustomHooks/exercise/useWidth.jsx</code>{" "}
        class to a function component using the <code>useState</code> and{" "}
        <code>useEffect</code> Hooks.
      </p>
      <p>
        Tip: to remove the event listeners we need to use the{" "}
        <a
          href="https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup"
          target="_blank"
        >
          {" "}
          cleanup phase
        </a>{" "}
        of the effect. To clean up the side effects you must return a function.
      </p>
      <p>
        You'll know it works because the "The width is: X" will change properly
        when you resize the screen.
      </p>
      <h4>Part 2, reusing</h4>
      <p>
        <input type="checkbox" /> 2.1. Import your
        src/components/patterns/CustomHooks/exercise/useWidth.js custom hook in{" "}
        <code>src/components/patterns/CustomHooks/exercise/index.jsx</code> and
        replace the &lt;Width /&gt; component using:
        <code>const width = useWidth()</code>
      </p>
      <p>
        You'll know it works because the "The width is: X" will change properly
        when you resize the screen. 🤔wait... then (discuss with your peer in
        the group):
      </p>
      <p>
        <input type="checkbox" /> 2.2. What's the difference between &lt;Width
        /&gt; and useWidth if I can also do{" "}
        <code>import Width from "./useWidth"</code> and do &lt;Width /&gt;?
      </p>
      <h4>Part 3, pitfalls</h4>
      <p>
        <input type="checkbox" /> 3.1. We have dissabled the{" "}
        <a
          href="https://github.com/facebook/react/issues/14920"
          target="_blank"
        >
          'exhaustive-deps' lint rule
        </a>
        , and you might have a memory leak in your <code>useWidth</code>. Your
        task is to identify it and fix it using useMemo or useCallback (you'll
        have to decide). Notice, you might be following good practices and
        already fixed the problem without realizing it. Double check with your
        peers in your group.
      </p>
      <p>
        ⚠️ Warning, you should use eslint to help you identify potential bugs.
        It's not enable in this exercise to help you understand the problem.
      </p>

      <h4>🤸‍♀️Bonus exercise, legacy</h4>
      <p>
        <input type="checkbox" /> Bonus 1. Replace the HoC{" "}
        <code>withWidth</code> in
        <code>
          src/components/patterns/CompoundComponents/exercise/Menu.jsx
        </code>{" "}
        with your custom hook <code>useWidth</code>.
      </p>

      <p>
        <input type="checkbox" /> Bonus 2. We want to replace the HoC{" "}
        <code>withWidth</code> in
        <code>src/components/App.jsx</code> with your custom hook but we don't
        have much time and confidence (ohh no tests!). Create a HoC that uses
        the useWidth hook and injects the width value via props to the App
        component.
      </p>
    </React.Fragment>
  );
};

export default Bonus;
