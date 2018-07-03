import React from 'react'
import PropTypes from 'prop-types'

class RadioGroup extends React.Component {
  constructor(props) {
    super()
    this.state = {
      value: props.defaultValue
    }
  }

  select(value) {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => (
      React.cloneElement(child, {
        isSelected: child.props.value === this.state.value,
        onClick: () => this.select(child.props.value)
      })
    ))

    return <div>{ children }</div>
  }
}

RadioGroup.propTypes = {
  defaultValue: PropTypes.string
}

export default RadioGroup
