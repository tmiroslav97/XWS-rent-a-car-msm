import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './authorization/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/Authorization/LoginPage';
import RegPage from './components/Authorization/RegPage';
import AgentFirmHomePage from './components/AgentFirm/AgentFirmHomePage';


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/sign-up" component={RegPage}/>

      <PrivateRoute exact path="/agent-firm" component={AgentFirmHomePage} accessRole={["ROLE_AGENT"]}/>

      <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>} />
      <Redirect from="*" to="/page-not-found" />
    </Switch>
  );
}

export default AppRouter;
