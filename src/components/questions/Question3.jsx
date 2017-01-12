import React from 'react'
import { Button } from 'react-bootstrap'

import Hello from '../modals/Hello'

const Question3 = (props, { modal }) => (
  <div>
    <a name="3"></a>
    <h2>Context</h2>
    <h3>Example 3</h3>
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
    <h3>Exercise 3</h3>
    <p>
      Refactor the components in patterns/Context/exercise/ to pass the properties to child components using context
    </p>
  </div>
)

Question3.contextTypes = {
  modal: React.PropTypes.object
}

export default Question3
