import { ADD_TODO } from '../actions/actionTypes';

const initialState = {
  todos: []
};

const addTodo = (state, action) => {
  return { ...state, todos: state.todos.concat(action.todo) }
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action);
    default: return state;
  }
};

export default todoReducer;
