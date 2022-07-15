import React, { Component } from "react";

export default class ClickCounter extends Component {
  state = {
    count: this.props.initialCount,
  };

  hendleInput = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.increment,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={this.hendleInput}
          style={{ padding: "15px", backgroundColor: "#0e3eff", color: "#fff" }}
        >
          Increment Me
        </button>
      </div>
    );
  }
}
