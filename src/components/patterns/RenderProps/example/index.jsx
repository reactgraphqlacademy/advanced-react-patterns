import React from "react";
import Input from "./Input";

const Example = () => (
  <div className="row">
    <div className="col-sm-6">
      <h3>Example</h3>
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
        In the example the state of an input is managed by an Input (notice the
        capital I) component. We can say that the input is a controlled
        component, and it's controlled by the Input. The Input owns the state of
        the input.
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
        Uncomment the following code
        {/* <Input>
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
        </Input> */}
      </p>
    </div>
  </div>
);

export default Example;
