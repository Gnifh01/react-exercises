import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
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
