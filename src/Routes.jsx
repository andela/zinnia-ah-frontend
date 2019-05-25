import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import AuthenticationLayout from './pages/Authentication';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import SocialAuth from './components/presentationals/SocialAuth/SocialAuth';
import NotFound from './pages/NotFound/NotFound';
import Editor from './pages/Editor';
import PrivateRoute from './components/presentationals/AuthenticationWrapper/AuthenticationWrapper';
import GuestRoute from './components/presentationals/GuestWrapper/GuestWrapper';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/@:username" component={Profile} />
      <GuestRoute exact path="/signup" component={AuthenticationLayout} />
      <GuestRoute
        path="/users/reset-password"
        exact
        component={ResetPassword}
      />
      <GuestRoute path="/forgot-password" exact component={ForgotPassword} />
      <GuestRoute path="/social-auth" exact component={SocialAuth} />
      <GuestRoute exact path="/login" component={AuthenticationLayout} />
      <PrivateRoute path="/editor" component={Editor} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
