import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

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
        <Helmet
          titleTemplate="%s"
          defaultTitle="react rails template"
        />
        {this.props.children}
      </div>
    );
  }
}
