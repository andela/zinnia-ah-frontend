import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes.jsx';
import store from './store/store';
import Navbar from './components/presentationals/Navbar/Navbar.jsx';
import Button from './components/presentationals/Button/Button.jsx';
import { Input } from 'semantic-ui-react';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="pt-3">
        <div>
          <Navbar>
            <div className="nav-items">
              <form className="search-bar">
                <Input
                  icon="search"
                  iconPosition="left"
                  placeholder="Search..."
                />
              </form>
              <Link to="/editor">
                <Button type="submit" value="WRITE" className="btn-dark w-10" />
              </Link>
            </div>
          </Navbar>
        </div>
      </div>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
