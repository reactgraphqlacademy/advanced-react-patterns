import React from "react";
import Field from "./Field";
import Measure from "./Measure";

const Example = () => (
  <div className="row">
    <div className="col-sm-12">
      <h3>Exercise 1</h3>
      <h4>Introduction</h4>
      <p>
        The advantage of separating the previous code into an Input to handle
        the state and an input (notice it's not capital I) to handle the
        appearance is that the Input functionality can also be applied to other
        form controls like radio buttons, or select fields, etc. In the end, al
        the form fields have some state that changes. Threfore, it probably
        makes more sense to call it Field instead of Input.
      </p>
      <h4>Task</h4>
      <p>
        You need to edit this file{" "}
        <em>patterns/RenderProps/exercise/index.jsx</em> so:
      </p>
      <ul>
        <li>
          {" "}
          The <strong>&lt;select&gt;</strong> (there is only one select in that
          file) should be composed with a <strong>&lt;Field&gt;</strong>{" "}
          component (<em>the Field.jsx component is already imported</em>
          ).
        </li>
        <li>
          The Field component will provide{" "}
          <strong>1) the value and 2) the onChange function</strong> to the
          &lt;select&gt; using a function as a children (AKA Render Props
          pattern)
        </li>
        <li>
          You will know it works because the value of the &lt;select&gt; will be
          displayed on the console every time the &lt;select&gt; changes.
        </li>
        <li>
          You <strong>don't have to edit this file</strong>{" "}
          <em>
            patterns/RenderProps/exercise/<strong>Field.jsx</strong>
          </em>
        </li>
      </ul>
      <p>
        Hint: it's the same we do when using the Input component in the previous
        example. Check this file <em>patterns/RenderProps/example/index.jsx</em>
      </p>
      <p>
        <select onChange={() => {}} value="red">
          <option value="red">Red</option>
          <option value="blue">blue</option>
        </select>
      </p>
    </div>
    <div className="col-sm-6">
      <h3>Exercise 2</h3>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/patterns/RenderProps/exercise/Measure.jsx"
        >
          source code exercise branch &#187;
        </a>
      </p>
      <p>
        In this case we want to implement a Measure component that can compose
        other components (they'll be the Measure's children) and provide them
        with its width (width of Measure's children).
      </p>
      <h4>Tasks</h4>
      <ul>
        <li>
          Edit this file <em>patterns/RenderProps/exercise/Measure.jsx</em> so
          the render method invokes the this.props.children and passes the width
          as an argument
        </li>

        <li>
          Edit this file <em>patterns/RenderProps/exercise/index.jsx</em> so the
          &lt;figure&gt; (there is only one &lt;figure&gt; on that file) is
          composed with the &lt;Measure&gt;
        </li>
        <li>
          Inside the &lt;figcaption&gt; render the width provided by the Measure
          component.
        </li>
      </ul>
    </div>
    <div className="col-sm-6">
      <figure>
        <img alt="dog" className="img-responsive" src="/dog.jpg" />
        <figcaption>
          My width is {"REPLACE THIS WITH THE ACTUAL width"} px
        </figcaption>
      </figure>
    </div>
  </div>
);

export default Example;
