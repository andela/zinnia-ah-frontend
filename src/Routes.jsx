import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import AuthenticationLayout from './pages/Authentication';
import Profile from './pages/Profile';
import SocialAuth from './components/presentationals/SocialAuth/SocialAuth';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={AuthenticationLayout} />
      <Route exact path="/signup" component={AuthenticationLayout} />
      <Route path="/@:username" component={Profile} />
      <Route path="/social-auth" exact component={SocialAuth} />
    </Switch>
  );
};

export default Routes;
