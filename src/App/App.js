import React, { Component } from 'react';
import './App.css';
import StaticHeader from '../StaticHeader/StaticHeader';
import TabHeader from '../TabHeader/TabHeader';
// import ContactCard from '../ContactCard/ContactCard';


class App extends Component {
  render() {
    return (
      <div>
        <StaticHeader />
        <TabHeader />
        {/* <ContactCard /> */}
        
      </div>
    );
  }
}

export default App;
