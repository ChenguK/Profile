import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, CardTitle } from 'reactstrap';
import Git from './github-logo.jpg';
import './FavVideo.css';

const FavVideo = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div 
                   className="zoom collapsible expandable waves-effect waves-light" onClick={toggle} id="FavVideo">
                       
                                
                       <ul>
                            <li style={{ margin: "0 1rem 0 1rem", display: "inline" }}>
                                <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://github.com/ChenguK/newfavoritevideo" target="_blank">
                                    <button title="GitHub" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                        <img width="45rem" style={{ marginTop: ".4rem"}} src={ Git } alt="My Favorite Video GitHub"/>
                                    </button>
                                </form>

                                <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://chenguk.github.io/newfavoritevideo/" target="_blank">
                                    <button title="Live Site" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                        <i className="material-icons">trending_flat</i>
                                    </button>
                                </form>
                            </li>
                       </ul>
                    
                        
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardTitle>
                            <h5>Your New Favorite Video</h5> 
                        </CardTitle>
                            <CardBody>
                            I have created an app where you can look for your new favorite video. Search any term, and click on any of the images and a modal appears with a larger picture of the videos thumbnail with the title, channel name and a description of the video below. You can click the image to open the video in another window or click off the modal to choose a different video.
                            </CardBody>
                    </Card>
                </Collapse>
                    </div>
        </div>
    );
};



export default FavVideo;