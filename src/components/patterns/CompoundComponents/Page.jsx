import React from "react";

import RadioGroup from "./example/RadioGroup";
import RadioOption from "./example/RadioOption";

const Page = () => (
  <div>
    <h2>Compound Components</h2>
    <h3>Example</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/CompoundComponents/example"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>The following components are a compound component:</p>
    <p>
      <em>
        Folder: patterns/CompoundComponents/example/RadioGroup.jsx and
        RadioOption.jsx
      </em>
    </p>
    <div>
      <p>What is a compound component?</p>
      <RadioGroup
        defaultValue="fm"
        onChange={radioValue => {
          console.log("radioValue", radioValue);
        }}
      >
        <RadioOption value="1">
          A component that returns another component
        </RadioOption>
        <RadioOption value="2">A function that returns a component</RadioOption>
        <RadioOption value="3">
          A component that passes props dinamically to its children
        </RadioOption>
        <RadioOption value="4">
          I have no idea so I'll wait for my pair to answer
        </RadioOption>
        <RadioOption value="5">
          ... still waiting for my pair to answer, I think neither of us have
          any clue
        </RadioOption>
      </RadioGroup>
    </div>
    <h3>Exercise</h3>
    <p>
      <a
        target="_blank"
        href="https://github.com/reactjsacademy/advanced-react-patterns/tree/master/src/components/patterns/CompoundComponents/exercise"
      >
        source code exercise branch &#187;
      </a>
    </p>
    <p>
      Refactor the components in patterns/CompoundComponents/exercise/ so we
      don't have to pass explicitly the toggleMenu property on every MenuItem.
    </p>
    <p>
      Good: &lt;MenuItem link="#1"&gt;Higher-Order Components&lt;/MenuItem&gt;
    </p>
    <p>
      Not good: &lt;MenuItem link="#1" toggleMenu=&#123; this.toggleMenu
      &#125;&lt;Higher-Order Components&gt;/MenuItem>
    </p>
    <hr />
  </div>
);

export default Page;
