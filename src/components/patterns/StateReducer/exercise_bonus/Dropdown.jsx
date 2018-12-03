import React from "react";

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  wrapperRef = React.createRef();

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
      this.toggle();
      this.removeMousedownListener();
    }
  };

  toggle = () => {
    if (!this.state.isOpen) {
      this.addMousedownListener();
    }
    this.setState({ isOpen: !this.state.isOpen });
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
