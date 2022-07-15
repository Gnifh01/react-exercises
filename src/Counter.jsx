import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.initialCount,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((oldState) => {
        return {
          count: oldState.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count}/>;
  }
}

class CounterDisplay extends Component {
  render() {
    return (
      <h1>Counter: {this.props.count}</h1>
    )
  }
}
