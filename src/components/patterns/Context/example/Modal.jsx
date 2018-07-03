import React from 'react'
import PropTypes from 'prop-types'
import { Modal as BootstrapModal } from 'react-bootstrap'

export const ModalContext = React.createContext()

class Modal extends React.Component {
  constructor () {
    super()

    this.state = {
      isOpen: false,
      content: null,
      backdrop: true
    }
  }

  showModal = (content, backdrop = true) => {
    this.setState({
      content,
      isOpen: true,
      backdrop
    })
  }

  hideModal = () => {
    this.setState({ isOpen: false })
  }

  render () {
    const { showModal, hideModal, state, props } = this

    return (
      <ModalContext.Provider value={{ ...state, showModal, hideModal }}>
        <BootstrapModal
          backdrop={ state.backdrop }
          show={ state.isOpen }
          onHide={ hideModal }
        >
          { state.content }
        </BootstrapModal>
        { props.children }
      </ModalContext.Provider>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.object
}

export default Modal
