import React, { Component, Fragment } from 'react';

// Components
import Header from './components/header';
import CcTrainingCenter from './container/ccTrainingCenter';

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
