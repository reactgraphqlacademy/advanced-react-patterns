import React from "react";
import Field, { ON_FIELD_RESET } from "./Field";

const Example = () => (
  <React.Fragment>
    <p>
      Extend `src/components/patterns/StateReducer/exercise_2/Field.jsx` so the
      intitial value in the state is a emoji smiley face but when the user
      resets the state it's an empty string.
    </p>
    <p>
      <Field
        stateReducer={(state, { type, ...change }) =>
          type === ON_FIELD_RESET ? { value: "" } : { ...state, ...change }
        }
      >
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
