// npm imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


// local imports
import App from 'src/components/App';
import store from 'src/store';


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
