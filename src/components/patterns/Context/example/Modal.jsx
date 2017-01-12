import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'

class Modal extends React.Component {
  constructor () {
    super()

    this.state = {
      showModal: false,
      content: null,
      backdrop: true
    }
  }

  getChildContext () {
    const {showModal, hideModal} = this

    return {
      modal: {
        showModal,
        hideModal
      }
    }
  }

  showModal = (content, backdrop = true) => {
    this.setState({
      content,
      showModal: true,
      backdrop
    })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div>
        <BootstrapModal
          backdrop={this.state.backdrop}
          show={this.state.showModal}
          onHide={this.closeModal}
        >
          {this.state.content}
        </BootstrapModal>
        {this.props.children}
      </div>
    )
  }
}

Modal.propTypes = {
  children: React.PropTypes.object
}

Modal.childContextTypes = {
  modal: React.PropTypes.object
}

export default Modal
