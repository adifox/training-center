import React, { Component, Fragment } from 'react';

// Components
import Header from './components/header';
import TrainingCenter from './container/trainingCenter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <TrainingCenter />
      </Fragment>
    );
  }
}

export default App;
