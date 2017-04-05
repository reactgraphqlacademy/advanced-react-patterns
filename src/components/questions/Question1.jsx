import React from 'react'
import withMousePosition from '../patterns/HigherOrderComponents/example/withMousePosition'
// import withRouter from '../patterns/HigherOrderComponents/exercise/withRouter'

const Question1 = (props, context) => (
  <div>
    <a name="1"></a>
    <h2>1. Higher-Order Components</h2>
    <h3>Example</h3>
    <p>
      The following component is a higher-order component called withMousePosition, it prints the position of the mouse when you move the mouse over the component using props.
    </p>
    <p>
      <em>File: patterns/HigherOrderComponents/example/withMousePosition.jsx</em>
    </p>
    <div>
      <pre className="alert alert-info" style={{ height: '100px' }}>
        { JSON.stringify(props.mouse, null, 2) }
      </pre>
    </div>
    <h3>Exercise withRouter</h3>
    <p>
      Implement the withRouter higher-order component so it gets the router from the context and it injects it to the composed component.
    </p>
    <p>
      Once implemented the withRouter, you should remove <code>Question1.contextTypes = &#123;
        router: React.PropTypes.object
      &#125;</code> from components/questions/Question1 and do instead <code>withRouter(withMousePosition(Question1))</code>
    </p>
    <p>
      Navigate to the <a onClick={() => { context.router.history.push("/hello") }}>hello page</a> to test the router.
    </p>
    <p>
      File of the exercise: patterns/HigherOrderComponents/exercise/withRouter.jsx
    </p>
    <h3>Exercise withWidth</h3>
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

Question1.contextTypes = {
  router: React.PropTypes.object
}

export default withMousePosition(Question1)
