export const required = value => (value ? undefined : "Required");

export const mustBeEmail = value => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reEmail.test(value) ? undefined : "Email format is not correct";
};

export const atLeastFiveCharacters = value =>
  value && value.length >= 5
    ? undefined
    : "You need to type at least 5 characters";
