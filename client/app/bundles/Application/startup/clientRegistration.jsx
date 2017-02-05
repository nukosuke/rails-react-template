import React from 'react';
import { Router as ReactRouter, browserHistory } from 'react-router';
import ReactOnRails from 'react-on-rails';
import routes from '../routes/routes';

const Router = (props, railsContext) => {
  const history = browserHistory;
  //TODO:
  //const store = ReactOnRails.getStore("appStore");
  //const history = syncHistoryWithStore(
  //  browserHistory,
  //  store,
  //)
  return (
    <ReactRouter history={history}>
      {routes}
    </ReactRouter>
  );
};

// This is how react_on_rails can see the Router in the browser.
ReactOnRails.register({
  Router,
});
