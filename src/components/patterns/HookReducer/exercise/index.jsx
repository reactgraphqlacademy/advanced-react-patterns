import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
        touched: {
          ...state.touched,
          ...getTouchedFields(action.payload, true),
        },
      };
    case "SUBMITTING_FORM":
      return {
        ...state,
        submitting: action.payload,
      };
    default:
      return state;
  }
}

function getTouchedFields(values = {}, touched = false) {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = touched;

    return acc;
  }, {});
}

function useForm(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    values: props.initialValues,
    touched: getTouchedFields(props.initialValues),
    errors: {},
    submitting: false,
  });

  React.useEffect(() => {
    if (props.validate) {
      const errors = props.validate(state.values);
      dispatch({ type: "SET_ERRORS", payload: errors });
    }
  }, [state.values]);

  const handleChange = (fieldName) => (event) => {
    event.preventDefault();
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: { [fieldName]: event.target.value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = props.validate(state.values);
    if (!Object.keys(errors).length) {
      dispatch({ type: "SUBMITTING_FORM", payload: true });
      // adding await in case onSubmit returns a promise, which is most likely in a real-world scenario
      await props.onSubmit(state.values);
      dispatch({ type: "SUBMITTING_FORM", payload: false });
    }
  };

  // useMemo wouldn't work here to keep the identity of the returned props because we need to memoize based on state.values[fieldName] and the fieldName is not known ahead of time
  const getFieldProps = (fieldName) => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    meta: { error: state.errors[fieldName], touched: state.touched[fieldName] },
  });

  return {
    handleChange,
    handleSubmit,
    getFieldProps,
    errors: state.errors,
    touched: state.touched,
    submitting: state.submitting,
  };
}

// React.memo doesn't work here because the function getFieldProps generates a new reference for the props object
const Field = React.memo(({ component: Component, ...rest }) => (
  <Component {...rest} />
));

const Input = ({ meta, label, ...rest }) => (
  <label>
    {label}:
    <br />
    <input {...rest} />
    {meta.touched && meta.error && (
      <div style={{ color: "red" }}>{meta.error}</div>
    )}
  </label>
);

function LoginForm(props) {
  const form = useForm({
    initialValues: props.initialValues,
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      let errors = {};
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.userId) {
        errors.userId = "UserId is required";
      }
      return errors;
    },
  });

  const { handleSubmit, getFieldProps, submitting } = form;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}
        type="text"
        label="Type your userId"
        {...getFieldProps("userId")}
      />
      <br />
      <Field
        component={Input}
        type="password"
        label="Type your password"
        {...getFieldProps("password")}
      />
      <br />
      <button type="submit">{submitting ? "Submitting" : "Submit"}</button>
    </form>
  );
}

const Exercise = () => (
  <React.Fragment>
    <p>Custom Login Form with validation</p>
    <LoginForm
      initialValues={{
        password: "",
        userId: "",
      }}
    />
  </React.Fragment>
);

export default Exercise;
