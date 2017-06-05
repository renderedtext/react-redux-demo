import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { setSelectedPerson } from '../../actions/peopleActions';
import store from '../../store';

class PersonItem extends Component {
  render() {
    const person = this.props.person;
    return (
      <li onClick={ this.showDetails }>
        { person.name }
      </li>
    );
  };

  showDetails = () => {
    store.dispatch(setSelectedPerson(this.props.person));
    browserHistory.push(`people/${this.props.index}`);
  }
}

export default PersonItem;
