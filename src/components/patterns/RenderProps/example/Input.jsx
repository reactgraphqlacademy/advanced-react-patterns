import React from "react";

export class Input extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value }, () => {
      console.log("Current Input state:", this.state.value);
    });
  };

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return this.props.children({ value, onChange });
  }
}

export default Input;
