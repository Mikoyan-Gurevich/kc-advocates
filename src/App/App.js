import React, { Component } from 'react';
import './App.css';
import StaticHeader from '../StaticHeader/StaticHeader';
import TabHeader from '../TabHeader/TabHeader';

class App extends Component {
  render() {
    return (
      <div>
        <StaticHeader />
        <TabHeader />
      </div>
    );
  }
}

export default App;
