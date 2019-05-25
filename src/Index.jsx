import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes.jsx';
import store from './store/store';
import Navbar from './components/presentationals/Navbar/Navbar.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
