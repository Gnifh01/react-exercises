import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Message = () => {
  return <p>What a beautiful day!</p>;
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Message />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

root.render(<App />);
