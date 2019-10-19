/*
Exercise

Open the console on your browser and type [memoization exercise] in the console filter.
You should see on the console the console.log() for this exercise. 

1. Pair up and explain to each other how the memoize function works with the doEasyWork function.

2. Explain to each other how the memoize function works with doHardWork.
   Does the memoize function work differently?

3. Bonus, refactor the memoize function so it can memoize functions with any number of arguments-
   You can use the function doAnyWork to test your refactored memoize function
*/

async function doEasyWork(amount = 3000) {
  console.log(`[memoization exercise] ${amount} easy units produced`);
}

async function doHardWork(amount = 3000) {
  console.log("[memoization exercise] doing work");
  await new Promise(resolve => setTimeout(resolve, amount));
  console.log(`[memoization exercise] ${amount} units of hard work produced!`);

  return amount;
}

function doAnyWork(amount = 1, amount2 = 1, amount3 = 1) {
  return amount + amount2 + amount3;
}

function memoize(fn) {
  let cache = {};
  return (...args) => {
    const key = args.join(",");
    if (key in cache) {
      console.log("[memoization exercise] output from cache");
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// const memoizedDoWork = memoize(doEasyWork);
// memoizedDoWork(4000);
// memoizedDoWork(4000);

// Bounus
const memoizedDoWork = memoize(doAnyWork);
console.log(`[memoization exercise] ${memoizedDoWork(1, 2, 3)} === 6 ?`);
console.log(`[memoization exercise] ${memoizedDoWork(1, 50, 104)} === 155 ?`);
