import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { tokenSelector } from './store/user/selectors';
import PrivateRoute from './authorization/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginContainter from './containers/Authorization/LoginContainer';
import RegContainer from './containers/Authorization/RegContainer';
import AgentFirmHomePage from './components/AgentFirm/AgentFirmHomePage';
import EndUserHomePage from './components/EndUser/EndUserHomePage';
import CreateAdContainer from './containers/Ad/CreateAdContainer';
import CarManufacturerContainer from './containers/Codebooks/CarManufacturerContainer';
import AdListContainer from './containers/Ad/AdListContainer';
import CarTypeContainer from './containers/Codebooks/CarTypeContainer';
import FuelTypeContainer from './containers/Codebooks/FuelTypeContainer';
import GearboxTypeContainer from './containers/Codebooks/GearboxTypeContainer';
import CarModelContainer from './containers/Codebooks/CarModelContainer';
import AdminHomePage from './components/Administrator/AdminHomePage';
import AdDetailViewContainer from './containers/Ad/AdDetailViewContainer';

const AppRouter = () => {
  const token = useSelector(tokenSelector);
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" render={props => token == null ? (<LoginContainter {...props} />) : (<Redirect to="/" />)} />
        <Route exact path="/sign-up" render={props => token == null ? (<RegContainer {...props} />) : (<Redirect to="/" />)} />
        <PrivateRoute exact path="/end-user" component={EndUserHomePage} accessRole={["ROLE_USER"]} />

        <PrivateRoute exact path="/admin" component={AdminHomePage} accessRole={["ROLE_ADMIN"]} />
        <PrivateRoute exact path="/admin/car-man" component={CarManufacturerContainer} accessRole={["ROLE_ADMIN"]} />
        <PrivateRoute exact path="/admin/car-type" component={CarTypeContainer} accessRole={["ROLE_ADMIN"]} />
        <PrivateRoute exact path="/admin/fuel-type" component={FuelTypeContainer} accessRole={["ROLE_ADMIN"]} />
        <PrivateRoute exact path="/admin/gb-type" component={GearboxTypeContainer} accessRole={["ROLE_ADMIN"]} />
        <PrivateRoute exact path="/admin/car-model" component={CarModelContainer} accessRole={["ROLE_ADMIN"]} />

        <PrivateRoute exact path="/agent-firm" component={AgentFirmHomePage} accessRole={["ROLE_AGENT"]} />
        <PrivateRoute exact path="/createAd" component={CreateAdContainer} accessRole={["ROLE_AGENT", "ROLE_USER"]} />
        <PrivateRoute exact path="/agent-firm/ads" component={AdListContainer} />
        <PrivateRoute exact path="/agent-firm/ad-detail-view/:ad" component={AdDetailViewContainer} />
        <Route exact path="/page-not-found" component={() => <h1>Page not found!</h1>} />
        <Redirect from="*" to="/page-not-found" />
      </Switch>
  );
}

export default AppRouter;
