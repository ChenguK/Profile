import React from 'react';
import ReactPlayer from "react-player";
import './Video.css';

const Video = () => {
    return (
        <div className="container" id="video">
            <ReactPlayer 
                url="https://youtu.be/28c9EDaE4wE" 
            />
        </div>
    )
}

export default Video;