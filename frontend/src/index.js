import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import rootSagas from './rootSagas';

import './index.css';
import UserHome from './user/view/userList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const saga = createSagaMiddleware();

const store = createStore(combineReducers(reducers), composeEnhancers(
  applyMiddleware(saga)
));

saga.run(rootSagas);

const App = () => (
  <Provider store={store}>
      <UserHome />
  </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

serviceWorker.register();
