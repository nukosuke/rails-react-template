import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">
        {this.props.children}
      </div>
    );
  }
}
