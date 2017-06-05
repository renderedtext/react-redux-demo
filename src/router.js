import React from 'react';
import { Router,
         Route,
         browserHistory,
         IndexRoute } from 'react-router';

import Home from './components/Home';

import PeopleList from './components/people/PeopleList';
import PersonDetails from './components/people/PersonDetails';

import PlanetsList from './components/planets/PlanetsList';
import PlanetDetails from './components/planets/PlanetDetails';

const router = (
  <Router history={ browserHistory } >

    <Route path='Home' component={ Home } />

    <Route path='people' >
      <IndexRoute component={ PeopleList } />
      <Route path=':id' component={ PersonDetails } />
    </Route>

    <Route path='planets' >
      <IndexRoute component={ PlanetsList } />
      <Route path=':id' component={ PlanetDetails } />
    </Route>

  </Router>
);

export default router;
