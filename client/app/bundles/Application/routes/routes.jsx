import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from '../components/Application';
import Home from '../components/Home';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Home} />
  </Route>
);
