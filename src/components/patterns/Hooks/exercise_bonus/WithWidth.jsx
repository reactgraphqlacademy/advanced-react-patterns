import React, { useState, useEffect } from "react";

export const SMALL = 1;
export const MEDIUM = 2;
export const LARGE = 3;

const largeWidth = 992,
  mediumWidth = 768;

class WithWidth extends React.Component {
  constructor() {
    super();
    this.state = { width: this.windowWidth() };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  }

  componentWillUnmount() {
    if (window) window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    let width = this.windowWidth();
    if (width !== this.state.width) this.setState({ width });
  };

  windowWidth() {
    let innerWidth = 0;
    let width;
    if (window) innerWidth = window.innerWidth;

    if (innerWidth >= largeWidth) {
      width = LARGE;
    } else if (innerWidth >= mediumWidth) {
      width = MEDIUM;
    } else {
      // innerWidth < 768
      width = SMALL;
    }

    return width;
  }

  render() {
    switch (this.state.width) {
      case LARGE:
        return <h1>I'm a large screen</h1>;
      case MEDIUM:
        return <h1>I'm a medium screen</h1>;
      case SMALL:
        return <h1>I'm a small screen</h1>;
      default:
        null;
    }
  }
}

export default WithWidth;
