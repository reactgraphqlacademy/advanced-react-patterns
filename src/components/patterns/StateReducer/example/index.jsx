import React from "react";
import Field from "./Field";

const Example = () => (
  <React.Fragment>
    <p>The state of the Field is managed by the children component.</p>
    <p>
      <Field
        stateReducer={(state, change) => (isNaN(change.value) ? state : change)}
      >
        {({ value, onChange }) => (
          <input placeholder="Only numbers" value={value} onChange={onChange} />
        )}
      </Field>
    </p>
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
  </React.Fragment>
);

export default Example;
