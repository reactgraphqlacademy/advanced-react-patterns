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
    const { value } = e.target;

    this.setState(
      state => stateReducer(state, { ...state, value }),
      () => {
        console.log("Current Field state:", this.state.value);
      }
    );
  };

  render() {
    const { value } = this.state;
    const { onChange } = this;

    return this.props.children({ value, onChange });
  }
}

export default Field;
