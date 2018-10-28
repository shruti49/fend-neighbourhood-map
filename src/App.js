import React, { Component } from 'react';
import './App.css';
import Googlemap from './Component/Googlemap';

class App extends Component {
  render() {
    return (
      <div className="map">
        <Googlemap />
      </div>
    );
  }
}

export default App;
