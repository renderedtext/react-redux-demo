import { ADD_TODO } from './actionTypes';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo
  };
};
