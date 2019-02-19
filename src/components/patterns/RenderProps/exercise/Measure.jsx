import React from "react";
import PropTypes from "prop-types";

class Measure extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }

  handleResize() {
    const { clientWidth } = this.wrapper;
    this.setState({
      width: clientWidth
    });
  }

  render() {
    const { width } = this.state;

    return (
      <div style={{ display: "block" }} ref={ref => (this.wrapper = ref)}>
        {this.props.children(width)}
      </div>
    );
  }
}

Measure.propTypes = {
  children: PropTypes.func.isRequired
};

export default Measure;
