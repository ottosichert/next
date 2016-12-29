import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';

import {
  changePostIndex, replacePost, replacePostFinished,
  changePageIndex,
  changeOverlayIndex,
} from './actions';
import Menu from './Menu';

@connect(store => ({
  postIndex: store.layout.post.index,
  postDisabled: store.layout.post.disabled,
  postAnimateTransitions: store.layout.post.animateTransitions,
  pageIndex: store.layout.page.index,
  pageDisabled: store.layout.page.disabled,
  overlayIndex: store.layout.overlay.index,
  overlayDisabled: store.layout.overlay.disabled,
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

  render() {
    const {
      postIndex,
      postDisabled,
      postAnimateTransitions,
      pageIndex,
      pageDisabled,
      overlayIndex,
      overlayDisabled,
    } = this.props;

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

              <SwipeableViews
                index={overlayIndex}
                containerStyle={{ width: '100vw', height: '100vh', position: 'absolute', top: 0 }}
                onChangeIndex={this.changeOverlayIndex}
                disabled={overlayDisabled}
                slideStyle={{ marginTop: 20 }}
              >

                <div style={{ height: '100vh', width: '100vw' }}>
                  Share
                </div>

                <div style={{ height: '100vh', width: '100vw' }}>
                  Fullscreen Bild
                </div>

                <div style={{ height: '100vh', width: '100vw' }}>
                  (leer)
                </div>

                <div style={{ height: '100vh', width: '100vw' }}>
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

