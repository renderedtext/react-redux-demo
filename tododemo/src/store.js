import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

export default createStore(todoReducer);
