import { combineReducers } from 'redux';

import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';

export default combineReducers({
  peopleState: peopleReducer,
  planetsState: planetsReducer
});
