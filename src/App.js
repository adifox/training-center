import React, { Component, Fragment } from 'react';

// Components
import Header from './header';
import CcTrainingCenter from './ccTrainingCenter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <CcTrainingCenter />
      </Fragment>
    );
  }
}

export default App;
