import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import AppRouter from './AppRouter';
import NavBar from './containers/NavBar';
import InformationToasts from './common/InformationToasts';
import { ToastProvider } from 'react-toast-notifications';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NavBar />
      <AppRouter />
      <ToastProvider>
        <InformationToasts />
      </ToastProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

