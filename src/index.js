import './main.css';
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from  'react-router-redux';

import { Router, Route } from 'react-router';

import reducers from 'reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

document.write('Hello React/Redux!');

render(
    <Provider store={ store }>
        <Router history={ history } >

        </Router>
    </Provider>,
  document.getElementById('root')
);