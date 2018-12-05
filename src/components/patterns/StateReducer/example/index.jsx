import React from "react";
import Field from "./Field";

const Example = () => (
  <React.Fragment>
    <p>The following input gets the state from the parent Field component.</p>
    <p>
      <Field>
        {({ value, onChange }) => (
          <input
            placeholder="Any character"
            value={value}
            onChange={onChange}
          />
        )}
      </Field>
    </p>
    <p>
      The following input only lets the user type numbers by implementing a new
      stateReducer that only accepts numbers.
    </p>
    <p>
      <Field
        stateReducer={(state, change) => (isNaN(change.value) ? state : change)}
      >
        {({ value, onChange }) => (
          <input placeholder="Only numbers" value={value} onChange={onChange} />
        )}
      </Field>
    </p>
  </React.Fragment>
);

export default Example;
