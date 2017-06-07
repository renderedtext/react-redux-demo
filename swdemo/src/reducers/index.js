import { combineReducers } from 'redux';

import peopleReducer from './peopleReducer';

export default combineReducers({
  peopleState: peopleReducer
});
