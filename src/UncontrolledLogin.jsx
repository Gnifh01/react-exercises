import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  render() {
    const hendleFormSubmit = (event) => {
      event.preventDefault();

      const username = event.target.elements.username.value;
      const password = event.target.elements.password.value;
      const remember = event.target.elements.remember.checked;

      console.log({ username, password, remember });
    };

    return (
      <div>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={hendleFormSubmit}>
          <label>Username</label>
          <br />
          <input type="text" name="username"/>
          <br />
          <br />
          <label>Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <br />
          <input type="checkbox" name="remember" />
          <label>Remember</label>
          <br />
          <br />
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
