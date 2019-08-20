import React from "react";
import Example from "./example";
import Exercise from "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Hook Reducer</h2>
    <h3>Example</h3>
    <Example />

    <h3>Exercise</h3>
    <p>
      Refactor the LoginForm component in{" "}
      <code>src/components/patterns/HookReducer/exercise/index.jsx</code> so it
      implements the following features:
    </p>
    <ul>
      <li>
        Implement the SET_ERRORS action in the reducer. It should add an errors
        object to the the state using the action.payload
      </li>
      <li>
        <code>dispatch</code> a SET_ERRORS action with the errors (output from
        the
        <code>validate(state.values)</code> invocation) as payload.
      </li>
      <li>
        <code>dispatch</code> the SET_ERRORS action only when the state of the
        input fields change. Hint, you need to use the useEffect second
        argument.
      </li>
      <li>
        Users can only type numbers for the User Id. Hint, the reducer should
        not set the state if the userId value is not a number.
      </li>
      <li>
        Bonus, refactor the Hook Reducer so it's in a custom hook. You can call
        it useForm.
      </li>
    </ul>
    <Exercise />
  </React.Fragment>
);

export default Page;
