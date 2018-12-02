import React from "react"
import Measure from "./Measure"

const Example = () => (
  <div className="row">
    <div className="col-sm-6">
      <p>
        The following component is a "Render Props" component called Measure. It provides the width and the height of the wrapper component.
      </p>
      <p>
        <em>File: patterns/RenderCallback/example/Measure.jsx</em>
      </p>
    </div>
    <div className="col-sm-6">
      <Measure>
        {(width, height) => (
          <figure>
            <img
              alt="dog"
              style={{width}} src="/dog.jpg"
            />
            <figcaption>
              My width is {width}px
            </figcaption>
          </figure>
        )}
      </Measure>
    </div>
  </div>
)

export default Example
