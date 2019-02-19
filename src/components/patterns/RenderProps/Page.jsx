import React from "react";
import Example from "./example";
import Exercise from "./exercise";
//import BonusExercise from '../exercise_bonus/HoCs/GitHubIssueSearchInfiniteScroller'
import BonusExercise from "./exercise_bonus/BadImplementation";

const Page = props => (
  <div>
    <h2>Render Props</h2>
    <Example />
    <div />
    <Exercise />
    <h3>Bonus exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/RenderProps/exercise"
      >
        source code exercise branch &#187;
      </a>
    </p>
    Refactor the HoCs GitHubIssueSearchInfiniteScroller to be a Render Props
    <BonusExercise />
    <hr />
  </div>
);

export default Page;
