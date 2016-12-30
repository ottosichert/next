import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { setContentHeight } from './actions';

@connect(store => ({
  height: store.content.height,
}))
export default class Image extends Component {
  static propTypes = {
    ...Component.propTypes,
    title: PropTypes.string,
    id: PropTypes.number,
  }

  @autobind
  setContentHeight() {
    this.props.dispatch(setContentHeight(this.img.height));
  }

  render() {
    const { id, title, preload, type } = this.props;

    const imgProps = (preload ? {} : { onLoad: this.setContentHeight });
    return (
      <img
        src={`/static/${id}.${type}`}
        alt={title}
        style={{ width: '100vw' }}
        ref={(img) => { this.img = img; }}
        {...imgProps}
      />
    );
  }
}

