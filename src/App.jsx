import React from "react";

class Welcome extends React.Component {
  render() {
    return <p>Welcome {this.props.name}!</p>;
  }
}

//YES, I CAN SET DEFAULT VALUE IN PROPS WITH THIS METHOD :

Welcome.defaultProps = {
  name: "Gabbo",
};

export default class App extends React.Component {
  render() {
    return <Welcome />;
  }
}
