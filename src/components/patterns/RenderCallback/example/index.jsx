import React from "react"
import Measure from "./Measure"

const Example = () => (
  <div className="row">
    <div className="col-sm-6">
      <p>
        The following component is "render callback" component called Measure. It provides the width and the height of the wrapper component.
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
              style={{width}} src="https://img.buzzfeed.com/buzzfeed-static/static/2013-10/enhanced/webdr06/15/9/anigif_enhanced-buzz-23859-1381845509-0.gif"
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
