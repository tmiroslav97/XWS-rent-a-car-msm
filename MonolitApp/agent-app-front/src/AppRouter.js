import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
    </Switch>
  );
}

export default AppRouter;
