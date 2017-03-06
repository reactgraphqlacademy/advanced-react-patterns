import React from "react"
import Measure from "./Measure"

const Example = () => (
  <div className="row">
    <div className="col-sm-6">
      <p>
        The following component is a "render callback" component called Measure. It provides the width and the height of the wrapper component.
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
              style={{width}} src="/public/dog.jpg"
            />
            <figcaption>
              My width is {width}px, and my height is {height}px
            </figcaption>
          </figure>
        )}
      </Measure>
    </div>
  </div>
)

export default Example
