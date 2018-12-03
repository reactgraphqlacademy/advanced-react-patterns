import React from "react";

export const CLICKED_OUTSIDE_ACTION = "CLICKED_OUTSIDE_ACTION";
export const TOGGLE_DROPDOWN_ACTION = "TOGGLE_DROPDOWN_ACTION";

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
      this.toggleIsOpen(CLICKED_OUTSIDE_ACTION);
      this.removeMousedownListener();
    }
  };

  toggleIsOpen = actionType => {
    if (!this.state.isOpen) {
      this.addMousedownListener();
    }

    const { stateReducer } = this.props;

    this.setState(state => {
      const change = {
        type: actionType,
        isOpen: !state.isOpen
      };
      return stateReducer(state, change);
    });
  };

  onToggleDropdown = event => {
    event.preventDefault();
    this.toggleIsOpen(TOGGLE_DROPDOWN_ACTION);
  };

  render() {
    const { isOpen } = this.state;
    const { onToggleDropdown } = this;

    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        ref={this.wrapperRef}
      >
        {this.props.children({ onToggleDropdown, isOpen })}
      </div>
    );
  }
}

export default Dropdown;
