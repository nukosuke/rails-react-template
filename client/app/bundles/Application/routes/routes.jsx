import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from '../components/Application';
import Home from '../components/Home';
import User from '../components/User';
import SignIn from '../components/User/SignIn';
import SignUp from '../components/User/SignUp';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Home} />
    <Route path="users/" component={User}>
      <Route path="sign_in" component={SignIn} />
      <Route path="sign_up" component={SignUp} />
    </Route>
  </Route>
);
