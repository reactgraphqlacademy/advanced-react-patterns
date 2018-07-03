import React from 'react'
import PropTypes from 'prop-types'
import withMousePosition from '../../patterns/HigherOrderComponents/example/withMousePosition'
import List from './List'

const Question1 = (props) => (
  <div>
    <h2>
      Higher-Order Components
    </h2>
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
    <h3>Exercise withData</h3>
    <p>A typical use case of a HoC is to fetch data into a component.</p>
    <p><strong>Task:</strong> Can you compose the List component displayed below using <code>src/components/patterns/HigherOrderComponents/exercise/withData</code>?. Hint: the composition happens in List component not in Question1/index.js. For the task you'll have to edit 2 files:</p>
    <ul>
      <li>
        <code>src/components/patterns/HigherOrderComponents/exercise/withData</code>
      </li>
      <li>
        <code>src/components/questions/Question1/List.jsx</code>
      </li>
    </ul>
    <p>
      Display a list of gists from https://api.github.com/gists/public
    </p>
    <List url="https://api.github.com/gists/public?per_page=5" />
    <div className="alert alert-warning">
      <h4>Pro-tip</h4>
      <p>Why do you think we need to use a HoC to fetch the data? why not just having a "helper" function that fetches data and we call it from List component to fetch data?</p>
      <p>In this particular case there are two reasons we need to encapsulate that logic in a component</p>
      <ul>
        <li>We are tracking some state</li>
        <li>We are triggering the logic in a life cycle method (componentDidMount)</li>
      </ul>
    </div>
    <hr />
    <h3>Exercise withWidth</h3>
    <p>A good implementation of a HoC lets the developer that uses the HoC configure it easily without having to reimplement anything.</p>
    <p>
      The <code>src/components/patterns/HigherOrderComponents/exercise/withWidth</code> implementation we use has the largeWidth and mediumWidth hardcoded. It makes it more difficult to reuse this HoC in different projects where we might consider different screen sizes.
    </p>
    <p>
      <strong>Task:</strong>  Refactor the higher-order component withWidth so it accepts the sizes as a parameter. You can implement it in different ways:
    </p>
    <ul>
      <li>
        <p>
          The first way, and more naive, is by adding an extra parameter/s to the HoC functions. Example:
        </p>
        <p>
          <code>
          withWidth(compnent, &#123;
            largeWidth : 992,
            mediumWidth : 768,
            resizeInterval : 166
          &#125;
          </code>)
        </p>
      </li>
      <li>
        <p>
          The second one is using <strong>currying</strong>. Try to implement a HoC so you can call it as follows
        </p>
        <p>
          <code>
          withWidth(&#123;
            largeWidth : 992,
            mediumWidth : 768,
            resizeInterval : 166
          &#125;)(component)
        </code>
        </p>
      </li>
    </ul>
    <p>
      Tip. What you are trying to implement is similar to the <code>connect</code> function from <code>react-redux</code>.
    </p>
    <div className="alert alert-warning">
      <h4>Heads-up</h4>
      <p>There is more than one place where the HoC withWidth is being used. You'll need to update any call to withWidth using the new implemention</p>
    </div>
    <div className="alert alert-info">
      <h4>Bonus exercise</h4>
      <p>
        Thanks to the curried implementation, you could call the first part of the curried function once in the app, the one that accepts the configuration parameter. Then the second part of the curried function, the one that accepts the component, can be called in different parts of the app for each specific component.
      </p>
    </div>
    <hr />
  </div>
)

Question1.contextTypes = {
  router: PropTypes.object
}

export default withMousePosition(Question1)
