import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { getPlanets } from '../../actions/planetsActions';

import PlanetItem from './PlanetItem';

class PlanetsList extends Component {
  componentDidMount() {
    store.dispatch(getPlanets());
  }

  render() {
    const planets = this.props.planets;
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

const mapStateToProps = store => {
  return {
    planets: store.planetsState.planets
  };
};

export default connect(mapStateToProps)(PlanetsList);
