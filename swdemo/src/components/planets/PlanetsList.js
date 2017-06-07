import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlanetItem from './PlanetItem';

class PlanetsList extends Component {
  render() {
    const planets = [];
    return (
      <ul>
        {
          planets.map((planet, index) =>
            <PlanetItem
              planet={ planet }
              index={ index }
              key={ index }/>
          )
        }
      </ul>
    );
  }
}

export default PlanetsList;
