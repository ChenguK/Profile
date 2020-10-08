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
                            {/* <li>Actor</li>
                            <li>Writer</li> */}
                            <br/>
                            <li className="container left-align">Chengu Kargbo is a natural problem solver, a creative Full Stack Web Developer, and an actor who loves helping creative people take their vision from an idea to a global audience.</li>
                     
                            <li style={{ margin: "0 7rem 0 7rem", display: "inline"}}>
                            <form className="btn-floating btn-large green" 
                                action= "mailto:ChenguKargbo@gmail.com">
                                <button>
                                    <img id="header_email" title="Email Me" width="45rem" style={{ marginTop: ".3rem"}} src={ Envelope } alt="email"/>
                                </button> 
                            </form>
                            
                            <form style={{ margin: "2rem", cursor: "pointer"}} className="btn-floating btn-large green" 
                                action="https://github.com/ChenguK" target="_blank">
                                <button 
                                type="submit">
                                    <img id="header_git" width="45rem" title="GitHub" style={{ marginTop: ".3rem", cursor: "pointer"}} src={ Git } alt="github"/>
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
                        width="70%"
                        style={{ 
                            padding: "1rem 0 1rem 2rem", 
                            marginLeft: "4rem",
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