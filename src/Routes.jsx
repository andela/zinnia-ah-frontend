import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App.jsx';
import Login from './components/presentationals/Login.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Routes;
