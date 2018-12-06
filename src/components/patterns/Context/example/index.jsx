import React from 'react'
import { Button } from "react-bootstrap";
import { ModalContext } from "./Modal";

const Example = () => (
  <p>
      The following component is using context:
      <ModalContext.Consumer>
        {({ showModal }) => (
          <Button
            onClick={() => {
              showModal(<h1>Hi there!</h1>);
            }}
            bsStyle="info"
          >
            Show modal
          </Button>
        )}
      </ModalContext.Consumer>
    </p>
)

export default Example
