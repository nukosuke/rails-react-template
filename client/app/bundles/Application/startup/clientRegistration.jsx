import React from 'react';
import { Provider } from 'react-redux';
import { Router as ReactRouter, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactOnRails from 'react-on-rails';
import routes from '../routes/routes';
import store from '../store/store';

const Router = (props, railsContext) => {
  const store = ReactOnRails.getStore("store");
  const history = syncHistoryWithStore(
    browserHistory,
    store,
  );
  return (
    <Provider store={store}>
      <ReactRouter history={history}>
        {routes}
      </ReactRouter>
    </Provider>
  );
};

// This is how react_on_rails can see the Router in the browser.
ReactOnRails.register({
  Router,
});

ReactOnRails.registerStore({
  store,
});
