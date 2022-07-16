import React, { Component } from "react";

export default class ClickTracker extends Component {

  state = {
    button: "",
  }

  hendleClick = (event) => {
    this.setState({
      button: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>The last button clicked is: <br/>{this.state.button ? this.state.button : "no buttons were clicked"}</h1>
        <button
          name="Button 1"
          onClick={this.hendleClick}
          style={{ padding: "15px", backgroundColor: "#0e3eff", color: "#fff" }}
        >
          Button 1
        </button>
        <button
        name="Button 2"
          onClick={this.hendleClick}
          style={{ padding: "15px", backgroundColor: "#df2e34", color: "#fff" }}
        >
          Button 2
        </button>
        <button
        name="Button 3"
          onClick={this.hendleClick}
          style={{ padding: "15px", backgroundColor: "#0ba240", color: "#fff" }}
        >
          Button 3
        </button>
      </div>
    );
  }
}


