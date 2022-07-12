import React from "react";
import Age from "./Age";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { name } = this.props;
    return (
      <React.StrictMode>
        <p>Welcome {name}!</p>
        <Age age={10}/>
      </React.StrictMode>
    );
  }
}

Welcome.defaultProps = {
  name: "Gabbo",
};