import React from "react";
import Example from "./example";
//import Exercise from '../exercise/HoCs/GitHubIssueSearchInfiniteScroller'
import Exercise from "./exercise/BadImplementation";

const Page = props => (
  <div>
    <h2>Render Props</h2>
    <h3>Example</h3>
    <Example />
    <div />
    <h3>Exercise</h3>
    Refactor the HoCs GitHubIssueSearchInfiniteScroller to be a Render Props
    <Exercise />
    <hr />
  </div>
);

export default Page;
