import React from "react";

export class Field extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value }, () => {
      console.log("Current Field state:", this.state.value);
    });
  };

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return this.props.children({ value, onChange });
  }
}

export default Field;
