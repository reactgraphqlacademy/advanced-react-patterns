import React from "react";
import Measure from "./Measure";
import Input from "./Input";
import Field from "./Field";

const Example = () => (
  <div className="row">
    <div className="col-sm-6">
      <h3>Example 1</h3>
      <h4>Input</h4>
      <p>
        <a
          target="_blank"
          href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/patterns/RenderProps/example/Input.jsx"
        >
          source code exercise branch &#187;
        </a>
      </p>
      <p>
        We are going to see two examples of the "Render Props". In the first
        example the state of the input is managed by the Input component, and
        the rendering of the input (the presentational bits) are the concern of
        the consumer of Input.
      </p>
      <p>
        <em>File: patterns/RenderProps/example/Input.jsx</em>
      </p>
      <p>
        <Input>
          {({ value, onChange }) => (
            <input
              value={value}
              onChange={onChange}
              style={{ border: "2px solid red" }}
            />
          )}
        </Input>
      </p>
      <p>
        This technique gives us a lot of control on how the consumer of the
        Input wants to render the input
      </p>
      <p>
        <Input>
          {({ value, onChange }) => (
            <React.Fragment>
              <input
                name="color"
                type="radio"
                selected={value === "red"}
                value="red"
                onChange={onChange}
              />{" "}
              Red
              <br />
              <input
                name="color"
                type="radio"
                selected={value === "blue"}
                value="blue"
                onChange={onChange}
              />{" "}
              Blue
              <br />
            </React.Fragment>
          )}
        </Input>
      </p>
      <h4>Field</h4>
      <p>
        <a
          target="_blank"
          href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/patterns/RenderProps/example/Field.jsx"
        >
          source code exercise branch &#187;
        </a>
      </p>
      <p>
        The advantage of separating the Input and the input is that the Input
        functionality can also be applied to other form controls like radio
        buttons, or select fields, etc. Threfore, it probably makes more sense
        to call it Field instead of Input.
      </p>
      <p>
        <Field>
          {({ value, onChange }) => (
            <select onChange={onChange}>
              <option selected={value === "red"} value="red">
                Red
              </option>
              <option selected={value === "blue"} value="blue">
                blue
              </option>
            </select>
          )}
        </Field>
      </p>
      <p>
        <Field>
          {({ value, onChange }) => (
            <input
              value={value}
              onChange={onChange}
              style={{ border: "2px solid blue" }}
            />
          )}
        </Field>
      </p>
      <p>
        <em>File: patterns/RenderProps/example/Field.jsx</em>
      </p>
      <h3>Example 2: Measure</h3>
      <p>
        <a
          target="_blank"
          href="https://github.com/reactjsacademy/advanced-react-patterns/blob/master/src/components/patterns/RenderProps/example/Measure.jsx"
        >
          source code exercise branch &#187;
        </a>
      </p>
      <p>
        In this second example we have a "Render Props" component called
        Measure. Measure provides the width and the height to the children
        component.
      </p>
      <p>
        <em>File: patterns/RenderProps/example/Measure.jsx</em>
      </p>
    </div>
    <div className="col-sm-6">
      <Measure>
        {(width, height) => (
          <figure>
            <img alt="dog" style={{ width }} src="/dog.jpg" />
            <figcaption>My width is {width}px</figcaption>
          </figure>
        )}
      </Measure>
    </div>
  </div>
);

export default Example;
