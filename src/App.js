import React, { Component } from 'react'
import './App.css';
import ImageDisplay from './components/ImageDisplay';

export class App extends Component {
  render() {
    return (
      <div className="image-container">
        <ImageDisplay/>
      </div>
    )
  }
}

export default App
