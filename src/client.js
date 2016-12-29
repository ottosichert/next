import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'Components/App';
import store from 'Store';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App userAgent={navigator.userAgent} />
  </Provider>,
  document.getElementById('app'),
);
