import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  render() {
    const {name, age} = this.props;
    return (
      <React.StrictMode>
        <p>Welcome {name}!</p>
        <p>Your age is {age}</p>
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
    return <Welcome age={20} />;
  }
}
