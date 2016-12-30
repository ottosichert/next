import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';

import Content from 'Components/Content';
import { theme } from 'Components/App';

import {
  changePostIndex, replacePost, replacePostFinished,
  changePageIndex,
  changeOverlayIndex,
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

    const overlayStyle = {
      height: '100%',
      width: '100%',
      // position: 'absolute',
      // top: 0,
      background: 'radial-gradient(circle, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))',
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
            <Content next='upvote' />
          </div>

          <SwipeableViews
            index={pageIndex}
            containerStyle={{ height: '100vh' }}
            onChangeIndex={this.changePageIndex}
            disabled={pageDisabled}
          >

            <div style={{ height: '100vh', position: 'relative' }}>
              <Content />

              <SwipeableViews
                index={overlayIndex}
                containerStyle={{ width: '100vw', height: '100vh', position: 'absolute', top: 0 }}
                onChangeIndex={this.changeOverlayIndex}
                disabled={overlayDisabled}
                slideStyle={{ height: '100vh', width: '100vw' }}
              >

                <div style={overlayStyle}>
                  Share
                </div>

                <div>
                  Fullscreen Bild
                </div>

                <div>
                  (leer)
                </div>

                <div style={overlayStyle}>
                  Overlay
                </div>
              </SwipeableViews>
            </div>

            <div style={{ height: '100vh', backgroundColor: theme.tabs.backgroundColor }}>
              Upload
            </div>
          </SwipeableViews>

          <div style={{ height: '100vh' }}>
            <Content next='downvote' />
          </div>
        </SwipeableViews>

        <Menu />
      </div>
    );
  }
}

export reducer from './reducer';

