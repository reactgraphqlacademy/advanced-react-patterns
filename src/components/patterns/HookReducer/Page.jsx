/* eslint-disable jsx-a11y/accessible-emoji */
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
        rel="noopener noreferrer"
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
    <br />
    <p>
      File:<code> src/components/patterns/HookReducer/example/index.jsx</code>
    </p>
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

    <h3>Exercise part 1</h3>

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
    <h3>Exercise part 2</h3>
    <p>
      <input type="checkbox" /> Create a custom hook from your Login Form. You
      can call it useForm.
    </p>
    <p>🕵️‍♀️ Hints :</p>
    <ul>
      <li>Extract the useReducer outside the Login Form</li>
      <li>
        Don't think of state only, but also functions that create "props".
      </li>
    </ul>

    <h3>Exercise part 3</h3>
    <p>
      By default we are displaying the error message to the user even if the
      user did not use the form. That's not a great user experience. To improve
      that we are going to add two more states in our form to identify which
      fields are `dirty` and if the form is `submitted`.
    </p>
    <p>
      A field is dirty when the value of the field is not equal to the initial
      value, false if the values are equal.
    </p>

    <p>A field is submitted if the form is submitted :D</p>

    <h3>Bonus exercise part 1</h3>
    <p>
      We are going to add some state to our form to know when the form is being
      submitted.
    </p>
    <p>
      If the form is being submitted then we'll display the text "submitting"
      instead of "submit" in the submit button.
    </p>

    <h3>Bonus exercise part 2</h3>
    <p>
      Use the{" "}
      <a
        href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.htm"
        target="_blank"
      >
        React Profiler
      </a>{" "}
      in the React Dev Tools to record what happens when you type in the user
      id. Is the password being rendered as well? Why?
    </p>
    <p>
      To avoid unnecessary renders you can create another component called
      "Field" and use{" "}
      <a
        href="https://reactjs.org/docs/react-api.html#reactmemo"
        target="_blank"
      >
        React.memo
      </a>
      .
    </p>
  </React.Fragment>
);

export default Page;
