import React, { Component } from 'react';
import './Bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <div className="Bio-name">Shrey Banga</div>
        <div className="Bio-title">Engineer at <a href="https://quip.com">Quip</a></div>
        <div className="Bio-location">San Francisco, CA</div>
      </div>
    );
  }
}

export default Bio;
