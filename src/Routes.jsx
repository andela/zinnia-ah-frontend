import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';
import AuthenticationLayout from './pages/Authentication.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/auth" exact component={AuthenticationLayout} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
    </Switch>
  );
};

export default Routes;
