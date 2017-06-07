import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PlanetDetails extends Component {
  render() {
    const planet = this.props.planet;
    return (
      <div>
        <h1>PlanetDetails</h1>

        <p>{ planet.name }</p>

        <Link to='/planets'>People</Link>
      </div>
    );
  }
}

export default PlanetDetails;
