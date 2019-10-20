import React from "react";
import { Button } from "react-bootstrap";
import { useModal } from "./Modal";

const Example = () => {
  const { displayModal } = useModal();

  return (
    <p>
      The following component is using context:
      <Button
        onClick={() => {
          displayModal(<h1>Hi there!</h1>);
        }}
        bsStyle="info"
      >
        Show modal
      </Button>
    </p>
  );
};

export default Example;
