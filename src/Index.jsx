import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes.jsx';
import store from './store/store';
import Navbar from './components/presentationals/Navbar/Navbar.jsx';
// import ResponsiveProfileMenu from './components/container/ResponsiveProfileMenu/ResponsiveProfileMenu';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/*<ResponsiveProfileMenu />*/}
      <div className="pt-3">
        <div>
          <ToastContainer autoClose={5000} />
          <Navbar />
        </div>
      </div>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
