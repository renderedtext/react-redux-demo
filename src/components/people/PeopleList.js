import React, { Component } from 'react';
import { connect } from 'react-redux';

import PersonItem from './PersonItem';

import { getPeople } from '../../actions/peopleActions';
import store from '../../store';

class PeopleList extends Component {
  componentDidMount() {
    store.dispatch(getPeople());
  }

  render() {
    const people = this.props.people;
    return (
      <ul>
        {
          people.map((person, index) =>
            <PersonItem
              person={ person }
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
    people: store.peopleState.people
  };
};

export default connect(mapStateToProps)(PeopleList);
