import React from 'react'
import withMousePosition from '../patterns/HigherOrderComponents/example/withMousePosition'

const Question1 = (props) => (
  <div>
    <a name="1"></a>
    <h2>1. Higher-Order Components</h2>
    <h3>Example</h3>
    <p>
      The following component is a higher-order component called withMousePosition, it prints the position of the mouse when you move the mouse over the component.
    </p>
    <p>
      <em>File: patterns/HigherOrderComponents/example/withMousePosition.jsx</em>
    </p>
    <div>
      <pre className="alert alert-info" style={{ height: '100px' }}>
        { JSON.stringify(props.mouse, null, 2) }
      </pre>
    </div>
    <h3>Exercise</h3>
    <p>
      Refactor the higher-order component withWidth so it accepts the sizes as a parameter. <strong>Use function composition</strong>
      <code>
      &#123;
        largeWidth : 992,
        mediumWidth : 768,
        resizeInterval : 166
      &#125;
      </code>
    </p>
    <p>
      File of the exercise: patterns/HigherOrderComponents/exercise/withWidth.jsx
    </p>
    <hr />
  </div>
)

export default withMousePosition(Question1)
