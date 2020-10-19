import React, { Component } from 'react';
import './Contact.css';
import Envelope from './envelope.png';
import Git from './github-logo.jpg';
import LinkedIn from './linkedin.png';

class Contact extends Component {
    
    render () {
        return (
    <div>
        <h4>Thanks for Stopping By</h4>
        <h5>How to Contact Me</h5>

        <ul>
            <li id="contact_buttons" className="inline">

                <form className="btn-floating btn-large green" 
                    action= "mailto:ChenguKargbo@gmail.com">
                    <button 
                    type="submit">
                        <img id="header_email" title="Email Me" width="45rem" style={{ marginTop: ".3rem", cursor: "pointer"}} src={ Envelope } alt="email"/>
                    </button> 
                </form>

                <form className="btn-floating btn-large green" 
                    action="https://github.com/ChenguK" target="_blank">
                    <button 
                    type="submit">
                        <img id="header_git" width="45rem" title="GitHub" style={{ marginTop: ".4rem", cursor: "pointer"}} src={ Git } alt="github"/>
                    </button> 
                </form>

                <form  className=" btn-floating btn-large green" 
                    action="https://www.linkedin.com/in/chengukargbo/" target="_blank">
                    <button 
                    type="submit">
                        <img id="header_linkedin" title="LinkedIn" width="33rem" style={{ marginTop: ".8rem", cursor: "pointer"}} src={ LinkedIn } alt="linkedin"/>
                    </button> 
                </form>

            </li>
        </ul>
    </div>
        ); 
    };
}
export default Contact;