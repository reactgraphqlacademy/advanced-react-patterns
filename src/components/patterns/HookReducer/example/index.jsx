import React from "react";

const SET_FIELD_VALUE = "SET_FIELD_VALUE";

// 👩‍🏫The state of a form is a relatively complex state logic.
// Using a reducer also helps separate reads, from writes.
function reducer(state, action) {
  switch (action.type) {
    // 👩‍🏫reducers should respond to a given action
    case SET_FIELD_VALUE:
      // 👩‍🏫reducers should not mutate the current state but create a new one
      // (If you’re familiar with Redux, you already know how this works, but we have to mention it :)
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    default:
      // 👩‍🏫reducers should return the current state if the received action is not a case to be handled
      // (If you’re familiar with Redux, you already know all this, but we have to mention it anyway :)
      return state;
  }
}

const LoginForm = (props) => {
  const initialState = {
    values: props.initialValues,
  };

  // 👩‍🏫 useReducer accepts a reducer of type (state, action) => newState,
  // and returns the current state paired with a dispatch method
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // 👩‍🏫 Notice we are using a closure here. As a mental model from the closure exercise we did before:
  //             add = (a)         => (b)     =>
  const handleChange = (fieldName) => (event) => {
    event.preventDefault();
    dispatch({
      type: SET_FIELD_VALUE,
      payload: { [fieldName]: event.target.value },
    });
  };

  const getFieldProps = (fieldName) => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName), // 👩‍🏫 fieldName gets "captured" in the handleChange closure
  });

  const handleSubmit = (e) => {
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
  <LoginForm
    initialValues={{
      password: "",
      userId: "",
    }}
  />
);

export default Example;
