import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from "../store";
import { addTodo } from "../actions/todoActions";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      todo: ""
    }
  }

  render() {
    const todos = [];
    return (
      <div>
        <p>Todo List</p>
        { this.props.todos.map((todo, index) =>
            <p key={ index }>{ todo }</p>
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
    store.dispatch(
      addTodo(this.state.todo)
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todos: store.todos
  }
}

export default connect(mapStateToProps)(Main);
