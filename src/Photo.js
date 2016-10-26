import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  render() {
    return (
      <div className="Photo">
        <img src="me.jpg" alt="me"/>
      </div>
    );
  }
}

export default Photo;
