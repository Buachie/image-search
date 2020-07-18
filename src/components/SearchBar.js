import React, { Component } from 'react'
import ImageDisplay from './ImageDisplay'
export class SearchBar extends Component {

        state ={
            searchEntry: '',
            apiUrl: 'https://pixabay.com/api',
            apiKey:'14272018-277a44d4d1ae6e42f42ed7772',
            images:[]
        }



    handleChange =(e) =>{
        this.setState({[e.target.name]:e.target.value}, ()=>{
            let api =`${this.state.apiUrl}/?key=${this.state.apiKey}&image_type=photo&per_page=50&safesearch=true`
            fetch(api)
            .then(res=> res.json())
            .then(
                (result) => {
                    this.setState({images:result.hits})
                }
            )
        })

    }

    render() {
        console.log(this.state.images)
        return (
            <div>
            <div className="search-container">
                <input type= "search" name="searchEntry" className="search-bar" value= {this.state.searchEntry} onChange={this.handleChange}></input>
            </div>
            <br/>
            {this.state.images.length > 0? (<ImageDisplay images={this.state.images}/>) : null}
            </div>
            

        )
    }
}

export default SearchBar
