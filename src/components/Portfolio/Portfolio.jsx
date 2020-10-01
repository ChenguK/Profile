import React, { Component } from 'react';
import './Portfolio.css';
import Whale from './Whale_Landing_Page.png';
import Habit from './UserSummaryPageScreenShot.png';
import Mood from './moods_loginpage.png';
import Fav from './MyFavoriteVideo.png';
import Git from './github-logo.jpg';
// import GitHubButton from '../../components/GitHubButton/GitHubButton';
// import { Container, Button, Link } from 'react-floating-action-button'




class Portfolio extends Component {
    render () {
        return (
            <div className="portfolio" >
                   <div 
                   className="zoom"
                   style={{ backgroundImage: "url('${ Fav }')" }} >
                            <form action="https://github.com/ChenguK/newfavoritevideo" target="_blank">
                            <button className="btn-floating btn-large waves-effect waves-light green" rel="noreferrer noopener">
                               <img width="45rem" style={{ marginTop: ".3rem"}} src={ Git } alt="My Favorite Video GitHub"/>
                            </button>
                            </form>
                        {/* // <img 
                        //     z-index="1"
                        //     className="zoom" 
                        //     src={ Fav } 
                        //     alt="New Favorite Video App"/>
                        //     <GitHubButton /> */}
                    
                        {/* <div className="fixed-action-btn">
                            <a className="btn-floating btn-large waves-effect waves-light green" href="https://chenguk.github.io/newfavoritevideo/" target="_blank" rel="noreferrer noopener">
                                <i className="material-icons">add</i>
                            </a>
                        </div> */}
                    </div>
                    <div className="zoom">
                        <img 
                            className="zoom" 
                            src={ Mood } 
                            alt="moods"/>
                        <div className="fixed-action-btn">
                            <a className="btn-floating btn-large waves-effect waves-light green" href="https://moodsblog.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                                <i className="material-icons">add</i>
                            </a>
                        </div>
                    </div> 
                <a href="https://habit-zen.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <img 
                        className="zoom" 
                        src={ Habit } 
                        alt="HabitZen"/>
                </a>
                <a href="https://whalescope.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        
                    <img 
                        className="zoom" 
                        src={ Whale } 
                        alt="WhaleScope"
                        />

                </a>
                
               
                
            </div>
        );
    }
}

export default Portfolio;