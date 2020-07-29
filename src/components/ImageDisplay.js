import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import propTypes from 'prop-types'
import IconButton from 'material-ui/IconButton/IconButton';
export class ImageDisplay extends Component {
    state ={
        open: false,
        currentImage: ''
    }    


    handleOpen =(img)=>{
        this.setState({open:true, currentImage: img})
    }
    handleClose =(img)=>{
        this.setState({open:false})
    }
    render() {
        let imageListContent;
        const {images} = this.props;

        if(images){
            imageListContent =(
                <GridList cols={5} className="flex">
                    {images.map(img =>(
                        <GridTile title={img.tags} 
                        key={img.id} 
                        cols={img.cols || 1}
                        rows={1}
                        subtitle= {
                        <span> 
                            Photo by <strong>{img.user}</strong>
                        </span>
                        }
                        actionIcon={
                            <IconButton onClick={()=> this.handleOpen(img.largeImageURL)}>
                                <ZoomIn color="white"/>
                            </IconButton>
                        }>
                            <img src={img.largeImageURL} className="img-src"/>
                        </GridTile>
                    
                    ))}
                </GridList>
            )
            
        } else{
            imageListContent= null;
        }

        const actions= [
            <FlatButton label ="Close" primary={true} onClick={this.handleClose}/>
        ]

        return (
            <div className="container-lg">
                {imageListContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                        <img src={this.state.currentImage} alt="" style={{width:'100%'}}/>
                    </Dialog>
            </div>
        )
    }
};

ImageDisplay.propTypes = {
    images: propTypes.array.isRequired
}

export default ImageDisplay


