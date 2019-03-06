import React from "react";
import Examples from "./examples";
import Exercise from "./exercise";
import Bonus from "./exercise_bonus";

const Page = props => (
  <div>
    <h2>Hooks</h2>
    <Examples />
    <Exercise />
    <Bonus />
  </div>
);

export default Page;
