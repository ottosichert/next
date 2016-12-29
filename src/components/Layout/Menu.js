import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { Tab, Tabs } from 'material-ui/Tabs';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import CommunicationImportExport from 'material-ui/svg-icons/communication/import-export';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import NavigationFullscreen from 'material-ui/svg-icons/navigation/fullscreen';
import SocialShare from 'material-ui/svg-icons/social/share';
import { changeTabIndex } from './actions';
import { TAB } from './types';

@connect(store => ({
  index: store.layout.tab.index,
}))
export default class Menu extends Component {
  static propTypes = {
    ...Component.propTypes,
    dispatch: PropTypes.func.isRequired,
    index: PropTypes.number,
  }

  @autobind
  changeTabIndex(index) {
    this.props.dispatch(changeTabIndex(index));
  }

  render() {
    const { index } = this.props;

    return (
      <nav style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Tabs value={index} onChange={this.changeTabIndex}>
          <Tab icon={<SocialShare />} value={TAB.SHARE} />
          <Tab icon={<NavigationFullscreen />} value={TAB.FULL} />
          <Tab icon={<CommunicationImportExport />} value={TAB.MAIN} />
          <Tab icon={<ActionInfoOutline />} value={TAB.INFO} />
          <Tab icon={<FileFileUpload />} value={TAB.UPLOAD} />
        </Tabs>
      </nav>
    );
  }
}

