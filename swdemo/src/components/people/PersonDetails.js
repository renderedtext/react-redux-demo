import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PersonDetails extends Component {
  render() {
    const person = this.props.person;
    return (
      <div>
        <h1>Person Details</h1>

        <p>Name: { person.name } </p>
        <p>Birth year: { person.birth_year }</p>
        <p>Gender: { person.gender }</p>
        <p>Height: { person.height }</p>
        <p>Mass: { person.mass }</p>
        <p>Hair color: { person.hair_color }</p>
        <p>Skin color: { person.skin_color }</p>

        <Link to='/people'>People</Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    person: store.peopleState.selectedPerson
  };
};

export default connect(mapStateToProps)(PersonDetails);
