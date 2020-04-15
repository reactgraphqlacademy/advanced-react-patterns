import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Hook Reducer</h2>
    <p>
      From the{" "}
      <a
        href="https://reactjs.org/docs/hooks-reference.html#usereducer"
        target="_blank"
      >
        React docs
      </a>
    </p>
    <blockquote>
      React.useReducer is usually preferable to useState when you have complex
      state logic that involves multiple sub-values or when the next state
      depends on the previous one.{" "}
      <em>(We'll practice this in this exercise)</em>
    </blockquote>
    <blockquote>
      React.useReducer also lets you optimize performance for components that
      trigger deep updates because you can pass dispatch down instead of
      callbacks.{" "}
      <em>(We'll practice this in the next exercise about Context)</em>
    </blockquote>
    <h3>Example</h3>
    <p>Basic login form</p>
    <Example />
    <hr />
    <h3>🥑 Before the exercise 🏋️‍♀️</h3>
    <p>
      The code of the example is very similar to the code of the exercise. The
      example contains explanations 👩‍🏫, the exercise contains tasks 🚧 and hints
      🕵️‍♀️. If there are things that you don't understand about the code it's
      better to look at the example. If there are things that are not clear
      about what needs to done in the exercise after checking the tasks, let me
      know.
    </p>

    <h3>Exercise</h3>

    <h4>
      🎯 The goal is to understand how to handle complex state logic in our
      components that involves multiple sub-values
    </h4>

    <p>
      Refactor the LoginForm component in{" "}
      <code>src/components/patterns/HookReducer/exercise/index.jsx</code> so it
      implements the following:
    </p>
    <p>
      <input type="checkbox" /> 1. Handles the SET_ERRORS action in the reducer.
      It should add an errors object to the the state using the action.payload
    </p>
    <p>
      <input type="checkbox" /> 2. <code>dispatch</code> a SET_ERRORS action
      with the errors (output from the
      <code>validate(state.values)</code> invocation) as payload.
    </p>
    <p>
      <input type="checkbox" /> 3.<code>dispatch</code> the SET_ERRORS action
      only when the state of the input fields change. Hint, you need to use the
      useEffect second argument.
    </p>

    <Exercise />
    <hr />
    <h3>Bonus exercise</h3>
    <p>
      <input type="checkbox" /> Create a custom hook from your Login Form. You
      can call it useForm.
    </p>
    <p>
      🕵️‍♀️ Hints :
      <ul>
        <li>Extract the useReducer outside the Login Form</li>
        <li>
          Don't think of state only, but also functions that create "props".
        </li>
      </ul>
    </p>
  </React.Fragment>
);

export default Page;
