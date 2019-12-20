import React from "react";
import { Form, Field } from "react-final-form";
import { required, mustBeEmail, atLeastFiveCharacters } from "./validators";

// Task 1, implement the composeValidators function
// each validator has a value as input and returns undefined or the error message
export const composeValidators = (...validators) => value =>
  validators.reduceRight((error, validator) => undefined, undefined);

// Task 2, you need to use the composeValidators so
// - Email is validated with required and mustBeEmail
// - Password is validatie with required and atLeastFiveCharacters
const FormExercise = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <p>
          <Field
            name="email"
            component={Input}
            type="text"
            placeholder="Email"
            validate={composeValidators(mustBeEmail, required)}
          />
          <br />
          Task: validate with required and must be an email
        </p>
        <p>
          <Field
            name="password"
            component={Input}
            type="password"
            placeholder="Password"
            validate={composeValidators(atLeastFiveCharacters, required)}
          />
          <br />
          Task: validate with required and min length 5 characters
        </p>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);

const onSubmit = () => {};

const Input = ({ input, meta, placeholder, type }) => (
  <React.Fragment>
    <input {...input} type={type} placeholder={placeholder} />
    {meta.error && meta.touched && (
      <span style={{ color: "red" }}>{meta.error}</span>
    )}
  </React.Fragment>
);

export default FormExercise;
