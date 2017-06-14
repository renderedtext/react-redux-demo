import { SET_PLANETS } from './actionTypes';

import axios from 'axios';

export const setPlanets = planets => {
  return {
    type: SET_PLANETS,
    planets
  };
};

export const getPlanets = () => {
  return dispatch => {
    axios.get('http://swapi.co/api/planets')
    .then(resp => {
      const planets = resp.data.results;
      dispatch(setPlanets(planets));
    })
    .catch(error => {
      console.log(error);
    });
  };
};
