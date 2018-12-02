import React from "react";

export class Field extends React.Component {
  initialState = {
    value: ""
  };
  state = this.initialState;
  static defaultProps = {
    stateReducer: (state, change) => change
  };

  onChange = e => {
    const { stateReducer } = this.props;
    const { state } = this.state;

    this.setState(stateReducer(state, { value: e.target.value }), () => {
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
