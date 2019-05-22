import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './pages/App';
import AuthenticationLayout from './pages/Authentication';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import SocialAuth from './components/presentationals/SocialAuth/SocialAuth';
import NotFound from './pages/NotFound/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={AuthenticationLayout} />
      <Route exact path="/signup" component={AuthenticationLayout} />
      <Route path="/users/reset-password" exact component={ResetPassword} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/@:username" component={Profile} />
      <Route path="/social-auth" exact component={SocialAuth} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
