import React, { PureComponent } from 'react';

import Menu from 'Components/Menu';

export default class Layout extends PureComponent {
  static propTypes = { ...PureComponent.propTypes };

  render() {
    return (
      <div>
        <Menu />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

