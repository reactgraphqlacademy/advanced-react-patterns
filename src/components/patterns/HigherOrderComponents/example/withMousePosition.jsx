import React from 'react'

const withMousePosition = Component => {
  return class ComponentWithMPosition extends React.Component {
    constructor() {
      super()
      this.state = { x: 0, y: 0 }
    }

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }

    render() {
      return (
        <div onMouseMove={ this.handleMouseMove }>
          <Component { ...this.props } mouse={ this.state }/>
        </div>
      )
    }
  }
}

export default withMousePosition
