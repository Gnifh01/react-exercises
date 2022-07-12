import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return (
      <React.StrictMode>
        {this.props.age !== undefined ? <p>Your age is {this.props.age}</p> : undefined}
      </React.StrictMode>
    );
  }
}

/* Age.defaultProps = {
  age: "20",
}; */
