/* eslint-disable no-unused-vars */

const toUpperCase = (text) => text.toUpperCase();

const removeSpaces = (text) => text.replace(/\s/g, "");

const removeNumbers = (text) => text.replace(/[0-9]/g, "");

export const compose = (...functions) => (initialValue) =>
  functions.reduceRight((acc, fn) => fn(acc), initialValue);

export const transformText = compose(toUpperCase, removeNumbers, removeSpaces);
