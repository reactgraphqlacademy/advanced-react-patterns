import React from "react";
import Example from "./example";
import ExerciseOne from "./exercise_1";
import ExerciseTwo from "./exercise_2";
import ExerciseThree from "./exercise_3/";
import BonusExercise from "./exercise_bonus/";

const Page = () => (
  <React.Fragment>
    <h2>State Reducer</h2>
    <p>
      State reducer allows consumers to control how the state is managed. This
      means the consumer has control over some logic in the parent. This is very
      useful in combination with the Render Props. This is called inversion of
      control.
    </p>
    <h3>Example</h3>
    <Example />

    <h3>Exercise 1</h3>
    <ExerciseOne />

    <h3>Exercise 2</h3>
    <ExerciseTwo />

    <h3>Exercise 3</h3>
    <ExerciseThree />

    <h3>Bonus exercise</h3>
    <BonusExercise />
  </React.Fragment>
);

export default Page;
