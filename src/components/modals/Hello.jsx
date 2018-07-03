import React from 'react'
import { Modal as BootstrapModal, Button } from 'react-bootstrap'
import { ModalContext } from '../patterns/Context/example/Modal'

const Hello = (props) => (
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
      <ModalContext.Consumer>
        {({ hideModal }) => (
          <Button
            type="button"
            onClick={ hideModal }
          >
            Close
          </Button>
        )}
      </ModalContext.Consumer>
    </BootstrapModal.Footer>
  </div>
)

export default Hello
