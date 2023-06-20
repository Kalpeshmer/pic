import './ImageList.css';
import React from "react";
import ImageShow from '../components/ImageShow';

function ImageList (props){
    
    const rerending = props.images.map((image) => {
        return <ImageShow key={image.id} image={image} /> ;
     })
 
    return <div className="image-list">
    {rerending}        
    </div>;
}

export default ImageList;