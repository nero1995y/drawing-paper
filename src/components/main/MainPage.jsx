import React, { PureComponent } from 'react';
import Overview from './Overview';
import List from './List';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Overview />
        <List />
      </React.Fragment>
    );
  }
}

export default MainPage;
