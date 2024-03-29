import React, { PureComponent, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from 'Components/Layout';

import theme from './theme';

export default class App extends PureComponent {
  static propTypes = {
    ...PureComponent.propTypes,
    userAgent: PropTypes.string.isRequired,
  }

  render() {
    // pass user agent to mui theme provider
    const { userAgent } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme, { userAgent })}>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export theme from './theme';
