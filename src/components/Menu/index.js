import React, { PureComponent } from 'react';
import Toolbar, { ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import SocialShare from 'material-ui/svg-icons/social/share';

export default class Header extends PureComponent {
  render() {
    return (
      <header>
        <nav>
          <Toolbar>
            <ToolbarGroup>
              <IconButton>
                <SocialShare />
              </IconButton>
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton>
                <ContentFlag />
              </IconButton>
              <IconButton>
                <ActionOpenInBrowser />
              </IconButton>
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton>
                <ActionInfoOutline />
              </IconButton>
            </ToolbarGroup>
          </Toolbar>
        </nav>
      </header>
    );
  }
}
