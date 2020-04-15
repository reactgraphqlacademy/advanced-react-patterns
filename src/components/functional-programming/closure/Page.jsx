/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./exercise";

const Page = () => (
  <React.Fragment>
    <h2>Closure</h2>
    <blockquote>
      Closure is when a function is able to remember and access its lexical
      scope even when that function is executing outside its lexical scope. Kyle
      Simpson
    </blockquote>
    <blockquote>
      “[Lexical scoping] how a parser resolves variable names when functions are
      nested”. Mozilla Dev Net
    </blockquote>
    <h3>🏋️‍♀️Exercise</h3>
    <p>
      Open the console on your browser and type [closure exercise] in the
      console filter. You should see on the console the console.log for this
      exercise.
    </p>
    <p>
      <input type="checkbox" /> 1. Go to{" "}
      <code>src/components/functional-programming/closure/exercise.js</code> and
      uncomment line 11. You should get the following error "TypeError: addFive
      is not a function"
    </p>
    <p>
      <input type="checkbox" /> 2. To fix it you are only allowed to change the{" "}
      <code>function add()</code>. The <code>function add()</code> should be
      implemented in a way that
      <code>addFive(7)</code> outputs 12
      <br />
      🚨 YOU CAN ONLY EDIT THE function add() IN THAT FILE 🚨
    </p>

    <p>
      You know your implementation works because you'll see on the console:
      [closure exercise] addFive(7) is 12
    </p>
    <h3>Bonus, discuss about the solution with your peers</h3>
    <p>1- Is the inner function pure?</p>
    <p>2- What's executed first, the inner function or the outer function?</p>
  </React.Fragment>
);

export default Page;
