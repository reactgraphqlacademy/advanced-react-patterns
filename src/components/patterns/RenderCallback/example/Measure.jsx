import React from "react"

class Measure extends React.Component {
  constructor() {
    super()
    this.state = {
      width: 0,
      height: 0
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize() {
    const { clientHeight, clientWidth } = this.wrapper
    this.setState({
      width: clientWidth,
      height: clientHeight
    })
  }

  render() {
    const { width, height } = this.state

    return (
      <div style={{ display: 'block' }} ref={ ref => this.wrapper = ref }>
        { this.props.children(width, height) }
      </div>
    );
  }
}

Measure.propTypes = {
  children: React.PropTypes.func.isRequired
}

export default Measure
