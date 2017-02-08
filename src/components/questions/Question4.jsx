import React from 'react'
import { Button } from 'react-bootstrap'

import Hello from '../modals/Hello'

const Question4 = (props, { modal }) => (
  <div>
    <a name="4"></a>
    <h2>4. Context</h2>
    <h3>Example</h3>
    <p>
      The following component is using context:
      <Button
        onClick={() => { modal.showModal(<Hello>Hi there!</Hello>) }}
        bsStyle="info"
      >
        Show modal
      </Button>
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

Question4.contextTypes = {
  modal: React.PropTypes.object
}

export default Question4
