import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class PlanetItem extends Component {
  render() {
    const planet = this.props.planet;
    return (
      <li>
        <p onClick={ this.showDetails }>{ planet.name }</p>
        <button onClick={ this.remove }>Remove</button>
      </li>
    );
  }

  showDetails = () => {
  }

  remove = () => {
  }
}

export default PlanetItem;
