### Introduction to React

React makes it painless to create interactive UIs.

Component based.


#### props

```javascript
// book.js
import React from "react";

class Book extends React.Component {
  render() {
    return (
      <h1>{ this.props.title }</h1>
    );
  }
}

export default Book;
```

```javascript
// book_list.js
import React from "react";

class BookList extends React.Component {
  render() {
    return (
      { this.props.books.map((book) => {
          <Book title={ book.title } />
        })
      }
    );
  }
}

export default BookList;
```

#### state

```javascript
// book_list.js
import React from "react";

class BookList extends React.Component {
  constructor() {
    super();

    this.state = {
      books: [{ id: 1, title: "Awesome book" },
              { id: 2, title: "Programming JS" }]
    };
  }

  render() {
    return (
      { this.state.books.map((book) => {
          <Book
            id={ book.id }
            title={ book.title }
          />
        })
      }
    );
  }
}

export default BookList;
```

### Redux

#### Core Concepts

- Store - single application state
- Actions - describe what happened in your application
- Reducers - describe how to change the state of your application

#### Three Principles of Redux

1) Single Source of Truth
    - State of the whole application is stored in a single
    object
2) State Is Read-Only
    - The only way to change the state is to dispatch actions
    - No manual mutations of state
    - All changes are centralised
    - Changes happen one-by-one (no race conditions)
3) Changes are made with pure functions
    - Reducers must be pure functions
    - Splitting reducers (each reducer handles one part of the state)

#### Actions

Actions are plain JS objects. Each action must have a `type` property.

```javascript
{
  type: 'HOLD_WORKSHOP',
  subject: 'Redux'
}
```

Action creators are functions that return actions.

```javascript
const holdWorkshop = subject => {
  return {
    type: 'HOLD_WORKSHOP',
    subject
  };
};
```

Actions are dispatched using the store.

```javascript
store.dispatch(action);
store.dispatch(holdWorkshop);
```

#### Reducers

Reducers are pure functions that return new application state based on
dispatched action.

`(prevState, action) => newState`

```javascript
const reducer = (state, action) => {
  switch(action.type) {
    case TYPE1: return newState1;
    case TYPE2: return newState2;
    default: return state
  };
};
```

#### Store

- Holds whole application state
- Allows access to state via `getState`
- Allows changing state via `dispatch(action)`

#### Data Flow

UNIDIRECTIONAL DATA FLOW

1) Dispatch action
2) Store calls reducers to calculate new state
3) Store saves calculated state
4) Listeners get notified to update their data via `getState`

#### Asynchronous Actions

1) Making API requests in components and dispatching actions when response is
returned (bad)
2) Using middlewares (good)

Using `Thunk` middlewares:
  - put all asynchronous code in action
  - action creator returns a function
  - middlewares executes code of that function when action is dispatched
  - dispatch normal actions based on response of asynchronous action
