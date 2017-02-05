import React, { PropTypes } from 'react';

export default class Application extends React.Component {
  static propTypes = {
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="application">

      </div>
    );
  }
}
