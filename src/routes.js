import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Demo from './Demo';

const routes = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/demo" exact component={Demo} />
  </Switch>
);

export default routes;
