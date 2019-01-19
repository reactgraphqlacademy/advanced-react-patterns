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
      control. Heads up, the State Reducer pattern exposes implementation
      details by exposing component state logic. Think twice before applying
      this pattern.
    </p>
    <h3>Example</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/StateReducer/example"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <Example />

    <h3>Exercise 1</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/StateReducer/exercise_1"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <ExerciseOne />

    <h3>Exercise 2</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/StateReducer/exercise_2"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <ExerciseTwo />

    <h3>Exercise 3</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/StateReducer/exercise_3"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <ExerciseThree />

    <h3>Bonus exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/StateReducer/exercise_bonus"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <BonusExercise />
  </React.Fragment>
);

export default Page;
