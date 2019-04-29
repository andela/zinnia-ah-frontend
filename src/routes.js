import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>This is where you begin your journey</p>
    </div>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default Routes;
