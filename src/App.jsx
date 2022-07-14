import React from "react";
import Counter from "./Counter";

export default class App extends React.Component {
  render() {
    return <Counter initialCount={0} increment={2} interval={1000}/>;
  }
}
