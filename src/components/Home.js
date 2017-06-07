import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home</p>
        <Link to='people'>People</Link>
        <Link to='planets'>Planets</Link>
      </div>
    );
  }
}

export default Home;
