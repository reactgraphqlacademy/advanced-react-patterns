import React from "react";
import { Button } from "react-bootstrap";
import { useModal } from "./Modal";

const Example = () => {
  const { showModal } = useModal();

  return (
    <React.Fragment>
      <p>
        I'm a button using context {` `}
        <Button
          onClick={() => {
            showModal(<h1>Hi there!</h1>);
          }}
          bsStyle="info"
        >
          Show modal
        </Button>
      </p>
      <p>
        File: <code>src/components/patterns/Context/example/Modal.jsx</code>
      </p>
      <blockquote>
        When the nearest &lt;MyContext.Provider&gt; above the component updates,
        this Hook will trigger a rerender with the latest context value passed
        to that MyContext provider.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/hooks-reference.html#usecontext"
        >
          React docs
        </a>
      </blockquote>
      <p>Let me show you on the React Profiler what that quote means</p>
    </React.Fragment>
  );
};

export default Example;
