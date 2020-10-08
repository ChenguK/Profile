import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Logo from './logo-black.png';
import { HashLink as Link } from 'react-router-hash-link';

class NavBar extends Component {
    render () {
        return (
            <div style={{ marginTop: "10px" }}>
                <Link to="" className="left brand-logo" style={{ marginLeft: "30px" }}><span><img height="50rem" src={Logo} alt="logo"/></span>
                </Link>
                <div className="right">
                {/* <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                    <ul style={{ display: "inline-flex", margin: "0 10px 0 10px", fontSize: "15px", fontWeight: "bold" }}>
                        <li style={{ margin: "0 10px 0 10px" }}><Link to="/Portfolio#Portfolio">Portfolio</Link></li>
                        <li style={{ margin: "0 10px 0 10px" }}><Link to="/Skills#Skills">Skills</Link></li>
                        <li style={{ margin: "0 10px 0 10px" }}><Link to="/Process#Process">Process</Link></li>
                        <li style={{ margin: "0 10px 0 10px" }}><Link to="/Resume#Resume">Resume</Link></li>
                        <li style={{ margin: "0 10px 0 10px" }}><Link to="/Bio#Bio">About Me</Link></li>
                        <li style={{ margin: "0 10px 0 10px" }}><Link to="/Contact#Contact">Contact</Link></li>
                    </ul>

                    <ul className="sidenav" id="mobile-demo">
                            <li><a href="/Bio">Bio</a></li>
                            <li><a href="/Portfolio">Portfolio</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                </div>
                    

        
            </div>
    )
        }
}

export default NavBar;