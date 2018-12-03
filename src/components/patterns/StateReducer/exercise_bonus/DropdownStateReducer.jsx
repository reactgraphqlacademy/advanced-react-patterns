import React from "react";

export const CLICKED_OUTSIDE_ACTION = "CLICKED_OUTSIDE_ACTION";

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  wrapperRef = React.createRef();
  static defaultProps = {
    stateReducer: (state, change) => change
  };

  componentWillUnmount() {
    this.removeMousedownListener();
  }

  addMousedownListener = () => {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  removeMousedownListener = () => {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  handleClickOutside = event => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.current.contains(event.target) &&
      this.state.isOpen
    ) {
      this.toggle({ type: CLICKED_OUTSIDE_ACTION });
      this.removeMousedownListener();
    }
  };

  toggle = action => {
    if (!this.state.isOpen) {
      this.addMousedownListener();
    }

    const { stateReducer } = this.props;

    this.setState(state =>
      stateReducer(state, {
        type: CLICKED_OUTSIDE_ACTION,
        isOpen: !state.isOpen
      })
    );
  };

  onToggleDropdownClicked = event => {
    event.preventDefault();
    this.toggle();
  };

  render() {
    const { isOpen } = this.state;
    const { onToggleDropdownClicked } = this;

    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        ref={this.wrapperRef}
      >
        {this.props.children({ onToggleDropdownClicked, isOpen })}
      </div>
    );
  }
}

export default Dropdown;
