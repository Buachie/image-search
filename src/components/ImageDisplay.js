import React, { Component } from 'react'

export class ImageDisplay extends Component {

    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded:false,
            items:[]
        }
    }

    componentDidMount(){
        fetch("https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=yellow+flowers&image_type=photo")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                });
                console.log(result)
            },
            (error) =>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        )
    }
    render() {


        return (
            <div>
                
            </div>
        )
    }
}

export default ImageDisplay


