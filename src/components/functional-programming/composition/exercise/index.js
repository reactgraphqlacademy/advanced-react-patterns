/* eslint-disable no-unused-vars */

const toUpperCase = (text) => text.toUpperCase();

const removeSpaces = (text) => text.replace(/\s/g, "");

const removeNumbers = (text) => text.replace(/[0-9]/g, "");

// 🚧 Task 0: comment out the following transformText function and uncomment the one bellow
export const transformText = (text) =>
  toUpperCase(removeSpaces(removeNumbers(text)));

// 🚧 Task 1: implement the following compose function
// export const transformText = compose(
//   toUpperCase,
//   removeNumbers,
//   removeSpaces
// );
// 🕵️‍♀️Hints:
// - The compose function should return another function (think of the previous addFive, same idea)
// - Spread the arguments of the compose function
// - Use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
