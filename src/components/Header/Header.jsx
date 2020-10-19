import React, { Component } from 'react';
import './Header.css';
import Face from './face.png';
import Envelope from './envelope.png';
import Git from './github-logo.jpg';
import LinkedIn from './linkedin.png';

class Header extends Component {

    render () {
        return (
            <div className="Header card" id="header">
                <div className="row container">
                
                    <div className="right col s8">
                    <h1>Chengu Kargbo</h1>
                        <h5>Full Stack Software Developer</h5>
                        <ul>
                            <br/>
                            <li className="container left-align">Chengu Kargbo is a natural problem solver, a creative Full Stack Web Developer, and an actor who loves helping creative people take their vision from an idea to a global audience.</li>
                     
                            <li id="header_buttons">
                            <form className="btn-floating btn-large green" 
                                action= "mailto:ChenguKargbo@gmail.com">
                                <button>
                                    <img id="header_email" title="Email Me" width="45rem" style={{ marginTop: ".3rem"}} src={ Envelope } alt="email"/>
                                </button> 
                            </form>
   
                            <form  className="btn-floating btn-large green" 
                                action="https://github.com/ChenguK" target="_blank">
                                <button 
                                type="submit">
                                    <img id="header_git" width="45rem" title="GitHub" style={{ marginTop: ".4rem", cursor: "pointer"}} src={ Git } alt="github"/>
                                </button> 
                            </form>
                            <form  className="btn-floating btn-large green" 
                                action="https://www.linkedin.com/in/chengukargbo/" target="_blank">
                                <button 
                                type="submit">
                                    <img id="header_linkedin" title="LinkedIn" width="33rem" style={{ marginTop: ".8rem", cursor: "pointer"}} src={ LinkedIn } alt="linkedin"/>
                                </button> 
                            </form>
                            </li>
                        </ul>
                    </div>       
                    <div className="right col s4">
                    <img 
                        width="75%"
                        style={{ 
                            padding: "1rem 3rem 1rem 2rem", 
                            margin: "1rem 3rem 0 2rem",
                            borderRadius: "7rem"
                        }}
                        
                        src={ Face } 
                        alt="Chengu"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;