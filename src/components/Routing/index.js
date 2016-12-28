import React, { PureComponent } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from 'Components/Layout';
import Home from 'Components/Home';
import Upload from 'Components/Upload';

export default class Routing extends PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='/upload' component={Upload} />
        </Route>
      </Router>
    );
  }
}

