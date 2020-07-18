import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar'
import ImageDisplay from './components/ImageDisplay';

export class App extends Component {

  render() {
    return (
      <div className="main">
        
        
        <SearchBar/>
        <ImageDisplay/>
        
        
      </div>
    )
  }
}

export default App
