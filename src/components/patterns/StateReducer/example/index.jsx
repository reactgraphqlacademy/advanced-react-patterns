import React from "react";

export class Input extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return this.props.children({ value, onChange });
  }
}

const Example = () => (
  <React.Fragment>
    <p>The state of the input is managed by the Input component.</p>
  </React.Fragment>
);

export default Example;
