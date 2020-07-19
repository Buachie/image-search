import React, { Component } from 'react'
import Gallery from "react-photo-gallery";
import {GridList, GridTile} from 'material-ui/GridList';
import iconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import propTypes from 'prop-types'
import IconButton from 'material-ui/IconButton/IconButton';
export class ImageDisplay extends Component {
        
    render() {
        let imageListContent;

        const {images} = this.props;

        if(images){
            imageListContent =(
                <GridList cols={3}>
                    {images.map(img =>(
                        <GridTile title={img.tags} 
                        key={img.id} 
                        cols={img.cols || 1}
                        subtitle= {
                        <span> 
                            Photo by <strong>{img.user}</strong>
                        </span>
                        }
                        actionIcon={
                            <IconButton>
                                <ZoomIn color="white"/>
                            </IconButton>
                        
                        }>
                            <img src={img.largeImageURL}/>
                        </GridTile>
                    
                    ))}
                </GridList>
            )
            
        } else{
            imageListContent= null;
        }
        return (
            <div className="main">
                {imageListContent}
            </div>
        )
    }
};

ImageDisplay.propTypes = {
    images: propTypes.array.isRequired
}

export default ImageDisplay


