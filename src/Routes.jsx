import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import AuthenticationLayout from './pages/Authentication';
import Profile from './pages/Profile';
import EditorContainer from './pages/Editor';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={AuthenticationLayout} />
      <Route exact path="/signup" component={AuthenticationLayout} />
      <Route path="/username" component={Profile} />
      <Route path="/editor" component={EditorContainer} />
    </Switch>
  );
};

export default Routes;
