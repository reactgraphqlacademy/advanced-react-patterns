import React from "react";

const SET_FIELD_VALUE = "SET_FIELD_VALUE";

function reducer(state, action) {
  switch (action.type) {
    case SET_FIELD_VALUE:
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

const LoginForm = props => {
  const [state, dispatch] = React.useReducer(reducer, {
    values: props.initialValues
  });

  const handleChange = fieldName => event => {
    event.preventDefault();
    dispatch({
      type: SET_FIELD_VALUE,
      payload: { [fieldName]: event.target.value }
    });
  };

  const getFieldProps = fieldName => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName)
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(state.values));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Id:
        <br />
        <input type="text" {...getFieldProps("userId")} />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input type="text" {...getFieldProps("password")} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const Example = () => (
  <React.Fragment>
    <p>Basic Login Form</p>
    <LoginForm
      initialValues={{
        password: "",
        userId: ""
      }}
    />
  </React.Fragment>
);

export default Example;
