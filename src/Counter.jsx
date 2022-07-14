import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.initialCount,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
