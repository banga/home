import React, { Component } from 'react';
import Bio from './Bio.js'
import Photo from './Photo.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo></Photo>
        <Bio></Bio>
      </div>
    );
  }
}

export default App;
