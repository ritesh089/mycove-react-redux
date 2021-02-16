/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js';
import { sessionService, sessionReducer } from 'redux-react-session';


// Init the session service
sessionService.initSessionService(store);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

