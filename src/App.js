import React, { Component } from 'react';
import HelloWorld from 'components/HelloWorld';
import Foobar from 'components/Foobar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Foobar />
      </div>
    );
  }
}

export default App;
