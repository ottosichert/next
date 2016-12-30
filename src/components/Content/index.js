import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import autobind from 'autobind-decorator';
import Paper from 'material-ui/Paper';

import { theme } from 'Components/App';

import Image from './Image';
import data from './data';

@connect(store => ({
  id: store.content.id,
  height: store.content.height,
}))
export default class Content extends Component {
  static propTypes = {
    ...Component.propTypes,
    next: PropTypes.string,
  }

  render() {
    const { next, id } = this.props;

    let contentId = id;
    let preload = true;
    if (next === 'upvote') {
      contentId += 1;
    } else if (next === 'downvote') {
      contentId += 2;
    } else {
      preload = false;
    }
    contentId %= data.length;
    const post = data[contentId];

    return (
      <Paper
        zDepth={1}
        style={{
          overflow: 'hidden',
          height: '100vh',
          paddingBottom: 48,
          backgroundColor: theme.tabs.backgroundColor,
        }}
      >
        <Image {...post} preload={preload} />
      </Paper>
    );
  }
}

export reducer from './reducer';
export data from './data';
