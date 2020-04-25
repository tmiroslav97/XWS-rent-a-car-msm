import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>

      <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>} />
      <Redirect from="*" to="/page-not-found" />
    </Switch>
  );
}

export default AppRouter;
