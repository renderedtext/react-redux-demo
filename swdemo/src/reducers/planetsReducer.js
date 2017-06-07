import { SET_PLANETS } from '../actions/actionTypes';

const initialState = {
  planets: []
};

const setPlanets = (state, action) => {
  return { ...state, planets: action.planets };
};

const planetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PLANETS: return setPlanets(state, action);
    default: return state;
  }
};

export default planetsReducer;
