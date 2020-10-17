import React, { Component } from 'react';
import './Portfolio.css';
import Git from './github-logo.jpg';
import 'react-materialize';


class Portfolio extends Component {
    
    render () {
        return (
            <div className="portfolio">
              
              <div className="card text contenteditable"><h4>WhaleScope</h4> 
                                <p className="left-align">WhaleScope is an app where avid whale watchers can share their latest sightings and use other user's sightings to plan future trips. <br />
                                <br/>
                                <b>Language:</b> Python, HTML<br />
                                <b>Technologies:</b> Django, JSON, Postgresql, Boto3, Amazon s3<br />
                                <br />
                                This was a group project. My contribution to the project was the comment, reply and like system as well as a planned side panel with news crawled from all over the web. The web crawler part of the project will be added in on future versions of the project.</p>
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
                </div> 
                <div className="card text contenteditable"><h4>HabitZen</h4> 
                            <p className="left-align">  
                            Helping you build daily habits to achieve your every goal.
                            Every person has goals that they've always wanted to accomplish. But as Charles Duhigg's The Power of Habit says, it takes daily habits to build to long term goals. We are providing users with a calm, beautiful place to build those habits that will help them become the person they've always wanted to be.<br />
                            <br/>
                            <b>Languages: </b>React, CSS <br />
                            <b>Technologies: </b> MongoDB, Express, Node.js, JSON, JWT for authentication, Bootstrap<br />
                            <br />
                            This was a group project. I was responsible for the basic framework of the MVC file structure, all CSS, the full CRUD functionality for the To Do List, as well as the update and delete functionality for the entire app. 
                            </p>    
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
                </div>
                <div className="card text contenteditable"><h4>Moods</h4> 
                            <p className="left-align">  
                            This blog is a place for people who want to share their moods. Where, if you’re having a hard time or had a great day, you can come to 'moods' and share what’s got you in a mood- share a gif that exemplifies your mood, post a picture - and get support from the commenters.<br />
                            <br/>
                            <b>Languages: </b>Javascript, HTML, CSS, <br />
                            <b>Technologies: </b> Node.js, Mongoose, MongoDB, EJS, Express, Passport, Morgan, Google People API and Google Oauth<br />
                            <br />
                            This was a solo project so I was solely responsible for all of Moods.
                            </p>    
                
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
                </div>
                            <div className="card text contenteditable"><h4>Your New Favorite Video</h4> 
                                <p className="left-align">  
                                I have created an app where you can look for your new favorite video. Search any term, and click on any of the images and a modal appears with a larger picture of the videos thumbnail with the title, channel name and a description of the video below.<br />
                                <br/>
                                <b>Languages: </b>Javascript, JQuery, HTML, CSS<br />
                                <b>Technologies: </b>AJAX, Youtube API, Materialize<br />
                                <br />
                                This was a solo project so I was solely responsible for all of Your New Favorite Video.
                                </p>
                   <div className="zoom" id="FavVideo">
                                
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
            </div>
        );
    }
}

export default Portfolio;