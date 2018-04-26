import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

// Redux
import store from './store/index';

// The Provider wraps the whole App so the components
// can use the state through props.
render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
