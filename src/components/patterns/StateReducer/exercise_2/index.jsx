import React from "react";
import Field, { ON_FIELD_RESET } from "./Field";

const Example = () => (
  <React.Fragment>
    <p>
      We are adding a type key to the change object. By doing so we get more
      flexibility on how to handle the changes in the state reducer based on the
      action that is executed.
    </p>
    <p>
      Extend `src/components/patterns/StateReducer/exercise_2/Field.jsx` so the
      intitial value in the state is a emoji smiley face but when the user
      resets the state it's an empty string. To achieve this you'll need to edit
      two different files:
    </p>
    <ul>
      <li>
        In `src/components/patterns/StateReducer/exercise_2/Field.jsx` you will
        have to refactor the onReset method and add an{" "}
        <code>ON_FIELD_RESET</code> type to the change.
      </li>
      <li>
        In `src/components/patterns/StateReducer/exercise_2/index.js` you will
        have to add a stateReducer prop to the Field component. Hint, use a
        ternary operator based on the type <code>ON_FIELD_RESET</code>.
      </li>
    </ul>
    <p>
      <Field>
        {({ value, onChange, onReset }) => (
          <React.Fragment>
            <input
              placeholder="Any character"
              value={value}
              onChange={onChange}
            />
            <button onClick={onReset}>Reset</button>
          </React.Fragment>
        )}
      </Field>
    </p>
  </React.Fragment>
);

export default Example;
