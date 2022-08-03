import React, { Component } from "react";
import data from "./Data";

export default class TodoList extends Component {
  state = {
    inputTodo: "",
    data: data,
  };

  saveTodo = (event) => {
    const todo = event.target.value;
    this.setState({
      inputTodo: todo,
    });
  };

  addTodo = () => {
    this.setState({
      data: [...data, { todo: this.state.inputTodo }],
    });
  };

  render() {
    return (
      <>
        <h1>Todo List</h1>
        <input type="text" onChange={this.saveTodo} />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.data.map((item, key) => {
            return <li key={key}>{item.todo}</li>;
          })}
        </ul>
      </>
    );
  }
}
