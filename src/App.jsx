import React from "react";
import Counter from "./Counter";

export default class App extends React.Component {
  render() {
    return <Counter initialCount={0} increment={1} interval={1000} />;
  }
}
