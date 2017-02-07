import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import ReactOnRails from 'react-on-rails';
import Helmet from 'react-helmet';
import routes from '../routes/routes';
import store from '../store/store';

// for header title server side rendeting on first load
// ref: http://r7kamura.hatenablog.com/entry/2016/10/10/173610
global.Helmet = Helmet;

const Router = (props, railsContext) => {
  const store = ReactOnRails.getStore("store");

  let error;
  let redirectLocation;
  let routeProps;
  const { location } = railsContext;

  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error;
    redirectLocation = _redirectLocation;
    routeProps = _routeProps;
  });

  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  return (
    <Provider store={store}>
      <RouterContext {...routeProps} />
    </Provider>
  );
};

ReactOnRails.register({
  Router,
});

ReactOnRails.registerStore({
  store,
});
