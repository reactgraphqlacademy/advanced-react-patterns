import React from "react";
import RandomImage from "./RandomImage";

const Exercise = () => (
  <React.Fragment>
    <h3>Exercise</h3>
    <p>
      Refactor the <code>src/patterns/Hooks/exercise/RandomImage.jsx</code>{" "}
      using the <code>useState</code> and <code>useEffect</code> Hooks.
    </p>
    <p>
      Tip: The fetchRandomImage function image should be executed only on the
      first render.
    </p>
    <RandomImage />
    <hr />
  </React.Fragment>
);

export default Exercise;
