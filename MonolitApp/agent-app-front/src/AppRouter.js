import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { tokenSelector } from './store/user/selectors';
import PrivateRoute from './authorization/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginContainter from './containers/Authorization/LoginContainer';
import RegPage from './components/Authorization/RegPage';
import AgentFirmHomePage from './components/AgentFirm/AgentFirmHomePage';
import EndUserHomePage from './components/EndUser/EndUserHomePage';
import CreatedAd from './components/Ad/CreatedAd';
import { Container } from 'react-bootstrap';

const AppRouter = () => {
  const token = useSelector(tokenSelector);
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" render={props => token == null ? (<LoginContainter {...props} />) : (<Redirect to="/" />)} />
        <Route exact path="/sign-up" render={props => token == null ? (<RegPage {...props} />) : (<Redirect to="/" />)} />

        <PrivateRoute exact path="/enduser" component={EndUserHomePage} accessRole={["ROLE_USER"]} />

        <PrivateRoute exact path="/agent-firm" component={AgentFirmHomePage} accessRole={["ROLE_AGENT"]} />
        <PrivateRoute exact path="/createdAd" component={CreatedAd} accessRole={["ROLE_AGENT", "ROLE_USER"]} />

        <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>} />
        <Redirect from="*" to="/page-not-found" />
      </Switch>
    </Container>
  );
}

export default AppRouter;
