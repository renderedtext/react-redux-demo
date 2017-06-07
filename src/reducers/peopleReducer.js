import { SET_PEOPLE,
         SET_SELECTED_PERSON,
         REMOVE_PERSON } from '../actions/actionTypes';

const initialState = {
  people: [],
  selectedPerson: null
};

const setPeople = (state, action) => {
  return { ...state, people: action.people };
};

const setSelectedPerson = (state, action) => {
  return { ...state, selectedPerson: action.selectedPerson };
};

const removePerson = (state, action) => {
  const people = state.people.filter((person, index) => index !== action.index);

  return { ...state, people: people };
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE: return setPeople(state, action);
    case SET_SELECTED_PERSON: return setSelectedPerson(state, action);
    case REMOVE_PERSON: return removePerson(state, action);
    default: return state;
  }
};

export default peopleReducer;
