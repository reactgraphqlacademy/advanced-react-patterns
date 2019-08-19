import React from "react";
import Examples from "./examples";
import Exercise from "./exercise";
import ExerciseCustomHooks from "./exercise_custom";

const Page = props => (
  <div>
    <h2>Hooks</h2>
    <Examples />
    <Exercise />
    <ExerciseCustomHooks />
  </div>
);

export default Page;
