import './main.css';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from  'react-router-redux';

import { Router, Route } from 'react-router';

import reducers from 'reducers';

import Layout from 'containers/layout';
import Phones from 'containers/phones';

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    thunk
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={ store }>
        <Router history={ history } >
          <Route component={ Layout }>
              <Route path='/' component={ Phones } />
          </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);