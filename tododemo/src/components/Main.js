import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  constructor() {
    super();

    this.state = { todo: '' };
  }

  render() {
    const todos = [];
    return (
      <div>
        <p>Todo List</p>
        { todos.map(todo =>
            <p>{ todo }</p>
          )
        }

        <input value={ this.state.todo }
               onChange={ this.onChange } />
        <button onClick={ this.addTodo }>
          Add todo
        </button>
      </div>
    );
  }

  onChange = event => {
    this.setState({ todo: event.target.value });
  }

  addTodo = () => {
    //TODO
    this.setState({ todo: '' });
  }
}

export default Main;
