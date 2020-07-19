import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar'
import ImageDisplay from './components/ImageDisplay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class App extends Component {

  render() {
    return (
      <div className="main">
        
        <MuiThemeProvider>
        <SearchBar/>
        <ImageDisplay/>
        </MuiThemeProvider>
        
        
      </div>
    )
  }
}

export default App
