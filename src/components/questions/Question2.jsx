import React from 'react'
import Example from '../patterns/RenderCallback/example'
//import Exercise from '../patterns/RenderCallback/exercise/HoCs/GitHubIssueSearchInfiniteScroller'
import Exercise from '../patterns/RenderCallback/exercise/BadImplementation'

const Question2 = (props) => (
  <div>
    <h2>
      Render Props
    </h2>
    <h3>Example</h3>
    <Example />
    <div>
    </div>
    <h3>Exercise</h3>
    Refactor the HoCs GitHubIssueSearchInfiniteScroller to be a Render Props
    <Exercise />
    <hr />
  </div>
)

export default Question2
