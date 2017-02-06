import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <h2>home</h2>
        <p>see client/app/bundles/Application/components/Home.jsx</p>
        <Link to='/users/sign_in'>sign_in</Link><br/>
        <Link to='/users/sign_up'>sign_up</Link>
      </div>
    );
  }
}
