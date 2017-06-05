import axios from 'axios';
import { SET_PEOPLE,
         SET_SELECTED_PERSON } from './actionTypes';

export const setPeople = people => {
  return {
    type: SET_PEOPLE,
    people
  };
};

export const setSelectedPerson = selectedPerson => {
  return {
    type: SET_SELECTED_PERSON,
    selectedPerson
  };
};

export const getPeople = () => {
  return dispatch => {
    axios.get('http://swapi.co/api/people')
    .then(resp => {
      console.log(resp);
      dispatch(setPeople(resp.data.results));
    })
    .catch(error => {
      console.log(error);
    });
  };
};
