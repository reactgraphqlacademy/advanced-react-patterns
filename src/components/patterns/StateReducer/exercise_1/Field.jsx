import React from "react";

export class Field extends React.Component {
  initialState = {
    value: "😄"
  };
  state = this.initialState;
  static defaultProps = {
    stateReducer: (state, { type, ...change }) => change
  };

  onChange = e => {
    const { stateReducer } = this.props;
    const { value } = e.target;

    this.setState(state => stateReducer(state, { ...state, value }));
  };

  onReset = e => {
    // TODO finish the implementation of this method so when it's
    // executed it invokes the state reducer with the initial state
  };

  render() {
    const { value } = this.state;
    const { onChange, onReset } = this;

    return this.props.children({ value, onChange, onReset });
  }
}

export default Field;
