import React from 'react'
import { Button } from 'react-bootstrap'

import Hello from '../modals/Hello'
import { ModalContext } from '../patterns/Context/example/Modal'

const Question4 = (props) => (
  <div>
    <h2>
      Context
    </h2>
    <h3>Example</h3>
    <p>
      The following component is using context:
      <ModalContext.Consumer>
        {({ showModal }) => (
          <Button
            onClick={() => { showModal(<Hello>Hi there!</Hello>) }}
            bsStyle="info"
          >
            Show modal
          </Button>
        )}
      </ModalContext.Consumer>
    </p>
    <p>
      <em>Folder: patterns/Context/example/Modal.jsx</em>
    </p>
    <h3>Exercise</h3>
    <p>
      Refactor the components in patterns/Context/exercise/ to pass the properties to child components using context
    </p>
    <div className="alert alert-warning fade in">
      <strong>Warning!</strong> You don't have to implement the Accordion component. The goal is the Accordion component doesn't have to know the toggleMenu function exists
    </div>
  </div>
)

export default Question4
