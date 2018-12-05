export const compose = (...functions) => initialValue =>
  functions.reduceRight((currentValue, fn) => fn(currentValue), initialValue);

const toUpperCase = text => text.toUpperCase();

const removeSpaces = text => text.replace(/\s/g, "");

const removeNumbers = text => text.replace(/[0-9]/g, "");

// export const transformText = compose(
//   toUpperCase,
//   removeNumbers,
//   removeSpaces
// );

export const transformText = text => text;
