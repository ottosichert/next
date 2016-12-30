import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import Paper from 'material-ui/Paper';

export default class Content extends Component {
  static propTypes = {
    ...Component.propTypes,
    next: PropTypes.string,
  }

  render() {
    const { next } = this.props;

    let text = 'bla';
    if (next === 'upvote') {
      text += ' up';
    } else if (next === 'downvote') {
      text += ' down';
    } else {
      text += ' bla';
    }

    return (
      <Paper zDepth={1}>
        {text}
      </Paper>
    );
  }
}
