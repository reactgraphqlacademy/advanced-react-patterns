import React from "react";

export const ON_FIELD_CHANGE = "ON_FIELD_CHANGE";
export const ON_FIELD_RESET = "ON_FIELD_RESET";

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

    this.setState(state =>
      stateReducer(state, { type: ON_FIELD_CHANGE, value })
    );
  };

  onReset = e => {
    // TODO finish the implementation of this method. You need to use the ON_FIELD_RESET type.
  };

  render() {
    const { value } = this.state;
    const { onChange, onReset } = this;

    return this.props.children({ value, onChange, onReset });
  }
}

export default Field;
