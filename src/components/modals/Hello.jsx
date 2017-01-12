import React from 'react'
import { Modal as BootstrapModal, Button } from 'react-bootstrap'

const Hello = (props, { modal }) => (
  <div>
    <BootstrapModal.Header>
      <BootstrapModal.Title id="contained-modal-title">
        Just a modal
      </BootstrapModal.Title>
    </BootstrapModal.Header>
    <BootstrapModal.Body>
      { props.children }
    </BootstrapModal.Body>
    <BootstrapModal.Footer className="text-center">
      <Button
        type="button"
        onClick={ modal.hideModal }
      >
        Close
      </Button>
    </BootstrapModal.Footer>
  </div>
)

Hello.contextTypes = {
  modal: React.PropTypes.object.isRequired
}

export default Hello
