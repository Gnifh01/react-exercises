import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { name } = this.props;
    return (
      <React.StrictMode>
        <p>Welcome {name}!</p>
        <Age age={20} />
      </React.StrictMode>
    );
  }
}

//YES, I CAN SET DEFAULT VALUE IN PROPS WITH THIS METHOD :
Welcome.defaultProps = {
  name: "Gabbo",
};

export default class App extends React.Component {
  render() {
    return <Welcome name={<strong>Manuel</strong>}/>;
  }
}
