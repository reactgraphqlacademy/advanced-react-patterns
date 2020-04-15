/*
Exercise

Open the console on your browser and type [memoization exercise] in the console filter.
You should see on the console the console.log() for this exercise. 

1. Pair up and explain to each other how the memoize function works with the doEasyWork function.

2. Where is the closure?

3. Explain to each other how the memoize function works with doHardWork.
   Does the memoize function work differently?

4. Bonus, refactor the memoize function so it can memoize functions with any number of arguments-
   You can use the function doAnyWork to test your refactored memoize function
*/

export async function doEasyWork(amount) {
  console.log(`[memoization exercise] ${amount} easy units produced`);
}

export async function doHardWork(amount) {
  console.log("[memoization exercise] doing work");
  await new Promise((resolve) => setTimeout(resolve, amount));
  console.log(`[memoization exercise] ${amount} units of hard work produced!`);

  return amount;
}

export function doAnyWork(amount = 1, amount2 = 1, amount3 = 1) {
  return amount + amount2 + amount3;
}

function memoize(fn) {
  let cache = {};
  return (amount) => {
    if (amount in cache) {
      console.log("[memoization exercise] output from cache");
      return cache[amount];
    } else {
      let result = fn(amount);
      cache[amount] = result;
      return result;
    }
  };
}

const memoizedDoWork = memoize(doEasyWork);
memoizedDoWork(4000);
memoizedDoWork(4000);

// Bounus
// const memoizedDoWork = memoize(doAnyWork);
// console.log(`[memoization exercise] ${memoizedDoWork(1, 2, 3)} === 6 ?`);
// console.log(`[memoization exercise] ${memoizedDoWork(1, 50, 104)} === 155 ?`);

// Bonus 2, extract the key cache functionality to a "resolver" function
