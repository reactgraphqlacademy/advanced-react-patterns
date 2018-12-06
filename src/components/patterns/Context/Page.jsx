import React from "react";
import { Button } from "react-bootstrap";

import { ModalContext } from "./example/Modal";

const Page = () => (
  <div>
    <h2>Context</h2>
    <h3>Example</h3>
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
    <p>
      <em>Folder: src/components/patterns/Context/example/Modal.jsx</em>
    </p>
    <h3>Exercise</h3>
    <p>
      Refactor the components in src/components/patterns/Context/exercise/ to
      pass the properties to child components using context
    </p>
    <div className="alert alert-warning fade in">
      <strong>Warning!</strong> You don't have to implement the Accordion
      component. The goal is the Accordion component doesn't have to know the
      toggleMenu function exists
    </div>
    <hr />
    <h3>Bonus Exercise</h3>
    <p>
      Implement the Redux Provider in
      src/components/patterns/Context/xbonus/Provider.js. Once implemented, use
      it in Root.js
    </p>
  </div>
);

export default Page;
