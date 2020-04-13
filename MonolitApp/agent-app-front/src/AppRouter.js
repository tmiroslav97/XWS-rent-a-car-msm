import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
    </Switch>
  );
}

export default AppRouter;
