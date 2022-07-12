import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return (
      <React.StrictMode>
        {this.props.age >= 18 && this.props.age <= 65 ? <p>Your age is {this.props.age}</p> : undefined}
      </React.StrictMode>
    );
  }
}

/* Age.defaultProps = {
  age: "20",
}; */
