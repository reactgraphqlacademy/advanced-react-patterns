import React from "react";
import Field from "./Field";

const Example = () => (
  <React.Fragment>
    <p>
      Implement the onReset method on
      `src/components/patterns/StateReducer/exercise_1/Field.jsx`, so when the
      input executes onReset the state reducer is invoked with the initial state
    </p>
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
