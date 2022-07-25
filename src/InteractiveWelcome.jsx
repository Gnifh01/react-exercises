import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Welcome, {this.props.name}</h2>;
  }
}

export default class InteractiveWelcome extends Component {
  state = { username: "" };

  hendleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.username} />
        <input
          name="username"
          placeholder="Your name..."
          value={this.state.username}
          onChange={this.hendleChange}
        />
      </div>
    );
  }
}
