import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo-black.png';

class NavBar extends Component {
    render () {
        return (
            <div style={{ marginTop: "10px" }}>
                <Link to="" className="left brand-logo" style={{ marginLeft: "30px" }}><span><img height="50rem" src={Logo} alt="logo"/></span>
                </Link>
                <div className="right">
                <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul style={{ display: "inline-flex", marginRight: "10px", fontSize: "15px"}}>
                        <li><a href="/Bio">Bio</a></li>
                        <li style={{ margin: "0 10px 0 10px" }}><a href="/Portfolio">Portfolio</a></li>
                        <li><a href="/Contact">Contact</a></li>
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