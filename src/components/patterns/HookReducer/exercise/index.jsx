import React from "react";

function reducer(state, action) {
  switch (action.type) {
    // TODO add a SET_ERRORS case that adds an erros key to the state with the action.payload
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

function LoginForm(props) {
  const { initialValues, onSubmit } = props;
  const validate = values => {
    let errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.userId) {
      errors.userId = "User Id is required";
    }
    return errors;
  };

  const [state, dispatch] = React.useReducer(reducer, {
    values: initialValues,
    errors: {}
  });

  React.useEffect(() => {
    if (validate) {
      const errors = validate(state.values);
      // TODO  dispatch a SET_ERRORS action with the errors as payload
    }
  }, []); // TODO dispatch the SET_ERRORS action only when the state of the input fields change.

  const handleChange = fieldName => event => {
    event.preventDefault();
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: { [fieldName]: event.target.value }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validate(state.values);
    if (!Object.keys(errors).length) {
      onSubmit(state.values);
    }
  };

  const getFieldProps = fieldName => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName)
  });

  const { errors } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Id:
        <br />
        <input type="text" {...getFieldProps("userId")} />
        {errors.userId && <div style={{ color: "red" }}>{errors.userId}</div>}
      </label>
      <br />
      <label>
        Password:
        <br />
        <input type="text" {...getFieldProps("password")} />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

const Exercise = () => (
  <React.Fragment>
    <p>Custom Login Form with validation</p>
    <LoginForm
      initialValues={{
        password: "",
        userId: ""
      }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    />
  </React.Fragment>
);

export default Exercise;
