import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import AuthenticationLayout from './pages/Authentication';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={AuthenticationLayout} />
      <Route exact path="/signup" component={AuthenticationLayout} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/username" component={Profile} />
    </Switch>
  );
};

export default Routes;
