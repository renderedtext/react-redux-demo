import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  )
);
