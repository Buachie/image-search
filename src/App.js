import React, { Component } from 'react'
import './App.css';
import ImageDisplay from './components/ImageDisplay';
import SearchBar from './components/SearchBar';

export class App extends Component {

  constructor(props){
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    alert(this.state.value.replace(/ /g, "+"));
    this.setState(this.state)
    event.preventDefault();
  }
  render() {
    return (
      <div className="main">
        
            
        
        <ImageDisplay/>
        
        
      </div>
    )
  }
}

export default App
