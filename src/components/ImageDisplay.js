import React, { Component } from 'react'

export class ImageDisplay extends Component {

        constructor(props){
            super(props);
            this.state ={
                error: null,
                isLoaded:false,
                searchEntry:"",
                previewURLS: [],
                pageNum:2,
                
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        


    getPhotos =()=>{
        const api = `https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=${this.state.searchEntry}&image_type=photo&per_page=50&orientation=vertical&page=${this.state.pageNum}`
        fetch(api)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                });
                this.setState({searchEntry:this.props.search})
                console.log(this.props.search)
                console.log(result);
                let previewURLS =[]
                for (let i =0; i <result.hits.length; i++){
                    previewURLS.push(result.hits[i].webformatURL.replace(/_640/g,'_180'))
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

    handleChange(event){
        this.setState({searchEntry:event.target.value.replace(/ /g, "+")})
      }
    
      handleSubmit(event){
        //alert(this.state.searchEntry.replace(/ /g, "+"));
        event.preventDefault();
        this.setState(this.state)
        this.getPhotos()
      }



    render() {
        let renderedOutput = this.state.previewURLS.map(item => <div className="img-sm">
            <img src={item}></img>
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
                {renderedOutput}
                
            </div>
            </div>
            </div>
        )
    }
}

export default ImageDisplay


