import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes.jsx';
import store from './store/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
