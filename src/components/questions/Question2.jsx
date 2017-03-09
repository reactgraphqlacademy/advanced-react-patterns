import React from 'react'
import Example from '../patterns/RenderCallback/example'
import Exercise from '../patterns/RenderCallback/exercise/HoCs/GitHubIssueSearchInfiniteScroller'
//import Exercise from '../patterns/RenderCallback/exercise/BadImplementation'

const Question2 = (props) => (
  <div>
    <a name="2"></a>
    <h2>2. Render Callback</h2>
    <h3>Example</h3>
    <Example />
    <div>
    </div>
    <h3>Exercise</h3>
    Refactor the HoCs GitHubIssueSearchInfiniteScroller to be a Render Callback
    <Exercise />
    <hr />
  </div>
)

export default Question2
