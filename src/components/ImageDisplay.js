import React, { Component } from 'react'
import Gallery from "react-photo-gallery";
export class ImageDisplay extends Component {

        constructor(props){
            super(props);
            this.state ={
                error: null,
                isLoaded:false,
                searchEntry:"",
                previewURLS: [],
                pageNum:[],
                currentPage: null
                
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        


    getPhotos =()=>{
        const api = `https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=${this.state.searchEntry}&image_type=all&per_page=50&orientation=all&page=1&safesearch=true`
        fetch(api)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                });
                //console.log(result);
                console.log(api)
                let previewURLS =[]
                let pageNum = []
                for (let i =0; i <result.hits.length; i++){
                    previewURLS.push({src:result.hits[i].webformatURL.replace(/_640/g,'_180'), 
                })
                }
                console.log(previewURLS)
                this.setState({previewURLS});
                //console.log(this.state)
                for(let x =1; x <= (result.totalHits/result.hits.length); x++){
                    pageNum.push(x)
                }
                this.setState({pageNum})
                console.log(pageNum)
                
            },
            (error) =>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        )
    }

    componentDidMount(){
        this.getPhotos()
    }

    handleChange(event){
        this.setState({searchEntry:event.target.value.replace(/ /g, "+")})
        this.getPhotos()
    }
    
    handleSubmit(event){
        
        this.setState(this.state)
        this.getPhotos()
        event.preventDefault();
    }
    /*
    changePage(){
        this.setState({currentPage:{num}})
    }
    */


    render() {
        let renderedOutput = this.state.previewURLS.map(item => <div className="img-sm">
            <img src={item}></img>
            </div>)
        let pageNumbers = this.state.pageNum.map(item => <div className="page-num">
            <button value={item}>{item}</button>
        </div>)

        return (
            <div className="main">
            <div className="search-container">
                <form onSubmit={this.handleSubmit}>
                <input type= "text" value={this.state.value} onChange={this.handleChange} className="search-bar"></input>
                <input type="submit" className="search-submit" value="Search"></input>
                </form>
            </div>
            <div className= "container-lg">
            <div className= "img-container">
                <Gallery photos = {this.state.previewURLS} direction = {"row"}/>
                
            </div>
            </div>
            <div className="page-num-container">
            {pageNumbers}
            </div>
            </div>
        )
    }
}

export default ImageDisplay


