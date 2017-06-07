import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PersonDetails extends Component {
  render() {
    const person = this.props.person;
    return (
      <div>
        <h1>PersonDetails</h1>

        <p>{ person.name }</p>
        <p>{ person.birth_year }</p>
        <p>{ person.gender }</p>
        <p>{ person.height }</p>
        <p>{ person.mass }</p>
        <p>{ person.hair_color }</p>
        <p>{ person.skin_color }</p>

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
