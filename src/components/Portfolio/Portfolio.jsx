import React, { Component } from 'react';
import './Portfolio.css';
// import FavInfo from '../FavInfo/FavInfo';
import Git from './github-logo.jpg';
import 'react-materialize';
// import Collapsible from 'react-collapsible';



class Portfolio extends Component {
    


    render () {
        return (
            <div className="portfolio">
              
                {/* <h5 className="left-align white" width="100%" 
                     style={{ padding: "0 68vh 0 1rem" }}
                     >Past Projects</h5> */}
                    <div className="zoom" id="WhaleScope">
                        <ul>
                            <li style={{ margin: "0 1rem 0 1rem", display: "inline" }}>
                                        <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://github.com/ChenguK/WhaleScope" target="_blank">
                                            <button title="GitHub" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                                <img width="45rem" style={{ marginTop: ".4rem"}} src={ Git } alt="WhaleScope GitHub"/>
                                            </button>
                                        </form>
                                        <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://whalescope.herokuapp.com/" target="_blank">
                                            <button title="Live Site" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                                <i className="material-icons">trending_flat</i>
                                            </button>
                                        </form>
                            </li> 
                        </ul> 
                    </div>
                    <div className="zoom" id="HabitZen">
                        <ul>
                            <li style={{ margin: "0 1rem 0 1rem", display: "inline" }}>
                                        <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://github.com/ChenguK/habit-zen" target="_blank">
                                            <button title="GitHub" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                                <img width="45rem" style={{ marginTop: ".4rem"}} src={ Git } alt="HabitZen GitHub"/>
                                            </button>
                                        </form>
                                        <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://habit-zen.herokuapp.com/" target="_blank">
                                            <button title="LiveSite" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                                <i className="material-icons">trending_flat</i>
                                            </button>
                                        </form>
                            </li> 
                        </ul> 
                    </div>
                
                    <div className="zoom" id="Moods">
                        <ul>
                            <li style={{ margin: "0 1rem 0 1rem", display: "inline" }}>
                                        <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://github.com/ChenguK/moods" target="_blank">
                                            <button title="GitHub" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                                <img width="45rem" style={{ marginTop: ".4rem"}} src={ Git } alt="Moods GitHub"/>
                                            </button>
                                        </form>

                                        <form style={{ margin: "0 1rem 0 1rem", display: "inline" }} action="https://moodsblog.herokuapp.com/" target="_blank">
                                            <button title="Live Site" className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                                <i className="material-icons">trending_flat</i>
                                            </button>
                                        </form>
                            </li> 
                        </ul> 
                    </div>
                   <div trigger=""
                   className="zoom collapsible expandable waves-effect waves-light" id="FavVideo">
                                {/* <Collapsible>
                                {/* <form style={{ margin: "0 1rem 0 1rem", display: "inline" }}>
                                    <button className=" collapsible expandable btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                                        <i className="material-icons">add</i>
                                    </button>
                                    <div className="collapsible-body"><span>Your New Favorite Video</span> <p>I have created an app where you can look for your new favorite video. Search any term, and click on any of the images and a modal appears with a larger picture of the videos thumbnail with the title, channel name and a description of the video below. You can click the image to open the video in another window or click off the modal to choose a different video.</p></div> 
                                {/* </form> 
                                </Collapsible> */}
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
                    
                        
                    </div>
            </div>
        );
    }
}

export default Portfolio;