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
            let api =`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchEntry}&image_type=photo&per_page=70&safesearch=true`
            fetch(api)
            .then(res=> res.json())
            .then(
                (result) => {
                    //Checks the image width in relation to the height and adjusts the number of columns in Image Display component
                    for (let i = 0; i < result.hits.length; i++) {
                        
                        if(result.hits[i].imageWidth > (result.hits[i].imageHeight * 1.5)){
                            result.hits[i]= Object.assign({'cols' : 2, },result.hits[i])
                            //console.log(result.hits[i])
                        }
                        
                    }
                    this.setState({images:result.hits})
                    //console.log(this.state)
                }
            )
        })
        
    }

    render() {
        return (
            <div>
            <div className="search-container">
                <h1 className="txt-wht">React Image Search</h1>
                <input type= "search" name="searchEntry" className="search-bar" value= {this.state.searchEntry} onChange={this.handleChange}></input>
            </div>
            <br/>
            {this.state.images.length > 0? (<ImageDisplay images={this.state.images}/>) : null}
            </div>
            

        )
    }
}

export default SearchBar
