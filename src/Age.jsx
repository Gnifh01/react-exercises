import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return (
      <React.StrictMode>
        {this.props.age >= 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young!</p>}
      </React.StrictMode>
    );
  }
}

/* Age.defaultProps = {
  age: "20",
}; */
