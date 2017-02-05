import React from 'react';
import { match, RouterContext } from 'react-router';
import ReactOnRails from 'react-on-rails';
import Helmet from 'react-helmet';
import routes from '../routes/routes';

// for header title server side rendeting on first load
// ref: http://r7kamura.hatenablog.com/entry/2016/10/10/173610
global.Helmet = Helmet;

const Router = (props, railsContext) => {
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
    <RouterContext {...routeProps} />
  );
};

ReactOnRails.register({
  Router,
});
