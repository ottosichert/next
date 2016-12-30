import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';

import {
  changePostIndex, replacePost, replacePostFinished,
  changePageIndex,
  changeOverlayIndex, changeOverlayTransparency,
} from './actions';
import Menu from './Menu';

@connect(store => ({
  postIndex: store.layout.postIndex,
  postDisabled: store.layout.postDisabled,
  postAnimateTransitions: store.layout.postAnimateTransitions,
  pageIndex: store.layout.pageIndex,
  pageDisabled: store.layout.pageDisabled,
  overlayIndex: store.layout.overlayIndex,
  overlayDisabled: store.layout.overlayDisabled,
  overlayTransparency: store.layout.overlayTransparency,
}))
export default class Layout extends Component {
  static propTypes = {
    ...Component.propTypes,
    postIndex: PropTypes.number,
    postDisabled: PropTypes.bool,
    postAnimateTransitions: PropTypes.bool,
    pageIndex: PropTypes.number,
    pageDisabled: PropTypes.bool,
    overlayIndex: PropTypes.number,
    overlayDisabled: PropTypes.bool,
    overlayTransparency: PropTypes.number,
    dispatch: PropTypes.func,
  };

  @autobind
  changePostIndex(index) {
    this.props.dispatch(changePostIndex(index));
  }

  @autobind
  replacePost() {
    setTimeout(() => {
      this.props.dispatch(replacePost());
      setTimeout(() => {
        this.props.dispatch(replacePostFinished());
      }, 0);
    }, 0);
  }

  @autobind
  changePageIndex(index) {
    this.props.dispatch(changePageIndex(index));
  }

  @autobind
  changeOverlayIndex(index) {
    this.props.dispatch(changeOverlayIndex(index));
  }

  @autobind
  changeOverlayTransparency(index) {
    this.props.dispatch(changeOverlayTransparency(index));
  }

  render() {
    const {
      postIndex,
      postDisabled,
      postAnimateTransitions,
      pageIndex,
      pageDisabled,
      overlayIndex,
      overlayDisabled,
      overlayTransparency,
    } = this.props;

    const overlayStyle = {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      background: `radial-gradient(circle, rgba(0, 0, 0, ${0.6 * overlayTransparency}), rgba(0, 0, 0, ${0.7 * overlayTransparency}))`,
    };

    return (
      <div>
        <SwipeableViews
          index={postIndex}
          axis='y'
          containerStyle={{ height: '100vh' }}
          onChangeIndex={this.changePostIndex}
          onTransitionEnd={this.replacePost}
          animateTransitions={postAnimateTransitions}
          disabled={postDisabled}
        >

          <div style={{ height: '100vh' }}>
            Nächstes Bild nach Upvote
          </div>

          <SwipeableViews
            index={pageIndex}
            containerStyle={{ height: '100vh', padding: 0 }}
            onChangeIndex={this.changePageIndex}
            disabled={pageDisabled}
          >

            <div style={{ height: '100vh', position: 'relative' }}>
              <span>Aktuelles Bild</span>

              <div style={overlayStyle} />

              <SwipeableViews
                index={overlayIndex}
                containerStyle={{ width: '100vw', height: '100vh', position: 'absolute', top: 0 }}
                onChangeIndex={this.changeOverlayIndex}
                onSwitching={this.changeOverlayTransparency}
                disabled={overlayDisabled}
                slideStyle={{ height: 'calc(100vh - 48px)', width: '100vw' }}
              >

                <div>
                  Share
                </div>

                <div>
                  Fullscreen Bild
                </div>

                <div>
                  (leer)
                </div>

                <div>
                  Overlay
                </div>
              </SwipeableViews>
            </div>

            <div style={{ height: '100vh' }}>
              Upload
            </div>
          </SwipeableViews>

          <div style={{ height: '100vh' }}>
            Nächstes Bild nach Downvote
          </div>
        </SwipeableViews>

        <Menu />
      </div>
    );
  }
}

export reducer from './reducer';

