import React, { Component } from 'react';
import './Header.css';
import Face from './face.png';
import Envelope from './envelope.png';
import Git from './github-logo.jpg';

class Header extends Component {

    render () {
        return (
            <div className="Header card container" id="header">
                <div className="row">
                        
                    <div className="right col s8 ">
                    <h4>Chengu Kargbo</h4>
                        <ul>
                            <li>Software Developer</li>
                            <li>Actor</li>
                            <br/>
                            <li className="container left-align">Chengu Kargbo is a natural problem solver, a creative Full Stack Web Developer, and an actor who loves helping creative people take their vision from an idea to a global audience.</li>
                            <br/>
                            <li style={{ margin: "0 10rem 0 10rem", display: "inline"}}>
                            <form  style={{ margin: "1rem", cursor: "pointer"}} className=" btn-floating btn-large green" 
                                action= "mailto:ChenguKargbo@gmail.com">
                                <button 
                                type="submit">
                                    <img id="header_email" width="45rem" style={{ marginTop: ".3rem", cursor: "pointer"}} src={ Envelope } alt="email"/>
                                </button> 
                            </form>
                            <form className=" btn-floating btn-large green" 
                                action="https://github.com/ChenguK" target="_blank">
                                <button 
                                type="submit">
                                    <img id="header_git" width="45rem" style={{ marginTop: ".3rem", cursor: "pointer"}} src={ Git } alt="GitHub"/>
                                </button> 
                            </form>
                            </li>
                        </ul>
                    </div>       
                    <div className="right col s3 " width="80%">
                    <img 
                        width="80%"
                        style={{ 
                            padding: ".7rem", 
                            borderRadius: "7rem"
                        }}
                        
                        src={ Face } 
                        alt="Photo"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;