import React from "react";
import ClickCounter from "./ClickCounter";

export default class App extends React.Component {
  render() {
    return <ClickCounter initialCount={0} increment={1}/>;
  }
}
