import React, { Component } from 'react'

export class ImageDisplay extends Component {

    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded:false,
            searchEntry:null,
            previewURLS: [],
            pageNum:2
        }
    }

    getPhotos =()=>{
        const api = `https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=yellow+flowers&image_type=photo&per_page=50&min_height=300&page=${this.state.pageNum}`
        fetch(api)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                });
                console.log(result);
                let previewURLS =[]
                for (let i =0; i <result.hits.length; i++){
                    previewURLS.push(result.hits[i].previewURL)
                }
                //console.log(previewURLS)
                this.setState({previewURLS});
                console.log(this.state)
                
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



    render() {
        let renderedOutput = this.state.previewURLS.map(item => <div className="img-sm">
            <img src={item}></img>
            </div>)

        return (
            <div className= "img-container">
                {renderedOutput}
                
            </div>
        )
    }
}

export default ImageDisplay


