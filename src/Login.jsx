import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  hendleInput = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.hendleInput}
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.hendleInput}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.hendleInput}
        />
        <label>Remember</label>
      </div>
    );
  }
}
