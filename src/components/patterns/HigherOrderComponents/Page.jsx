import React from "react";
import withMousePosition from "./example/withMousePosition";
import List from "./exercise_1/List";
import { connect } from "./exercise_bonus/connect";
import {
  incrementAction,
  decrementAction
} from "./exercise_bonus/utils/redux-counter";

const Page = ({ dispatch, ...props }) => (
  <div>
    <h2>Higher-Order Components</h2>
    <h3>Example</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/patterns/HigherOrderComponents/example/withMousePosition.jsx"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      The following component is a higher-order component called
      withMousePosition, it prints the position of the mouse when you move the
      mouse over the component using props.
    </p>
    <p>
      <em>
        File: patterns/HigherOrderComponents/example/withMousePosition.jsx
      </em>
    </p>
    <div>
      <pre className="alert alert-info" style={{ height: "100px" }}>
        {JSON.stringify(props.mouse, null, 2)}
      </pre>
    </div>
    <h3>Exercise withData</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/HigherOrderComponents/exercise_1"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>A typical use case of a HoC is to fetch data into a component.</p>
    <p>
      <strong>Task:</strong> Can you compose the List component displayed below
      using{" "}
      <code>
        src/components/patterns/HigherOrderComponents/exercise/withData
      </code>
      ?. Hint: the composition happens in List component not in
      Question1/index.js. For the task you'll have to edit 2 files:
    </p>
    <ul>
      <li>
        <code>
          src/components/patterns/HigherOrderComponents/exercise/withData
        </code>
      </li>
      <li>
        <code>src/components/questions/Question1/List.jsx</code>
      </li>
    </ul>
    <p>Display a list of gists from https://api.github.com/gists/public</p>
    <List url="https://api.github.com/gists/public?per_page=5" />
    <div className="alert alert-warning">
      <h4>Pro-tip</h4>
      <p>
        Why do you think we need to use a HoC to fetch the data? why not just
        having a "helper" function that fetches data and we call it from List
        component to fetch data?
      </p>
      <p>
        In this particular case there are two reasons we need to encapsulate
        that logic in a component
      </p>
      <ul>
        <li>We are tracking some state</li>
        <li>
          We are triggering the logic in a life cycle method (componentDidMount)
        </li>
      </ul>
    </div>
    <hr />
    <h3>
      Exercise withWidth <a name="withdata" />
    </h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/patterns/HigherOrderComponents/exercise_2/withWidth.jsx"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      A good implementation of a HoC lets the developer that uses the HoC
      configure it easily without having to reimplement anything.
    </p>
    <p>
      The{" "}
      <code>
        src/components/patterns/HigherOrderComponents/exercise/withWidth
      </code>{" "}
      implementation we use has the largeWidth and mediumWidth hardcoded. It
      makes it more difficult to reuse this HoC in different projects where we
      might consider different screen sizes.
    </p>
    <p>
      <strong>Task:</strong> Refactor the higher-order component withWidth so it
      accepts the sizes as a parameter. You can implement it in different ways:
    </p>
    <ul>
      <li>
        <p>
          The first way, and more naive, is by adding an extra parameter/s to
          the HoC functions. Example:
        </p>
        <p>
          <code>
            withWidth(compnent, &#123; largeWidth : 992, mediumWidth : 768,
            resizeInterval : 166 &#125;
          </code>
          )
        </p>
      </li>
      <li>
        <p>
          The second one is using <strong>currying</strong>. Try to implement a
          HoC so you can call it as follows
        </p>
        <p>
          <code>
            withWidth(&#123; largeWidth : 992, mediumWidth : 768, resizeInterval
            : 166 &#125;)(component)
          </code>
        </p>
      </li>
    </ul>
    <p>
      Tip. What you are trying to implement is similar to the{" "}
      <code>connect</code> function from <code>react-redux</code>.
    </p>
    <div className="alert alert-warning">
      <h4>Heads-up</h4>
      <p>
        There is more than one place where the HoC withWidth is being used.
        You'll need to update any call to withWidth using the new implemention
      </p>
    </div>
    <hr />
    <h3>Bonus exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/HigherOrderComponents/exercise_bonus"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      Implement the connect from react-redux. Look at the comments in
      src/components/patterns/HigherOrderComponents/xbonus/connect.js
    </p>
    <p>
      <button onClick={() => dispatch && dispatch(incrementAction())}>
        Increment
      </button>
      <strong style={{ padding: "0 10px" }}>{props.counter}</strong>
      <button onClick={() => dispatch && dispatch(decrementAction())}>
        Decrement
      </button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

// Uncomment the following line for the HoCs bonus exercise
// export default connect(mapStateToProps, mapDispatchToProps)(withMousePosition(Question1))
export default withMousePosition(Page);
