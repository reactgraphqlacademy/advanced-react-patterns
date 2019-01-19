import React from "react";
import Example from "./example";
//import Exercise from '../exercise/HoCs/GitHubIssueSearchInfiniteScroller'
import Exercise from "./exercise/BadImplementation";

const Page = props => (
  <div>
    <h2>Render Props</h2>
    <Example />
    <div />
    <h3>Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/RenderProps/exercise"
      >
        source code exercise branch &#187;
      </a>
    </p>
    Refactor the HoCs GitHubIssueSearchInfiniteScroller to be a Render Props
    <Exercise />
    <hr />
  </div>
);

export default Page;
