// npm imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


// local imports
import store from 'src/store';
import App from 'src/containers/App';


// render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const target = document.getElementById('root');
render(rootComponent, target);
