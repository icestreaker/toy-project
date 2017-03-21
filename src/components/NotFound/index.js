import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    var { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>
          Error 404: Page Not Found
        </h1>
      </div>
    );
  }
}

export default NotFound;
