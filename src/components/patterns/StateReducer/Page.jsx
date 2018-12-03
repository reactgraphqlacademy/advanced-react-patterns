import React from "react";
import Example from "./example";
import ExerciseOne from "./exercise_1";
import ExerciseTwo from "./exercise_2";
import BonusExercise from "./exercise_bonus/";

const Page = () => (
  <React.Fragment>
    <h2>State Reducer</h2>
    <ul>
      <li>Initial state</li>
      <li>Explain inversion of control?</li>
    </ul>
    <p>
      State reducer allows consumers to control how the state is managed. This
      means the consumer has controller over some logic in the parent, not just
      on the rendering. This is very useful in combination with the Render
      Props.
    </p>
    <h3>Example</h3>
    <Example />

    <h3>Exercise 1</h3>
    <ExerciseOne />

    <h3>Exercise 2</h3>
    <ExerciseTwo />

    <h3>Bonus exercise</h3>
    <BonusExercise />
  </React.Fragment>
);

export default Page;
