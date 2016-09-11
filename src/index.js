import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app.js'
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore,window.devToolsExtension ? window.devToolsExtension() : f => f);

  let store = createStore(reducers, reducers.state, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));
