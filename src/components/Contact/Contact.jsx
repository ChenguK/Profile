import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    
    render () {
        return (
    <div>
        <h4>Contact</h4>

        <form action= "mailto:ChenguKargbo@gmail.com">
            <button type="submit">ChenguKargbo@gmail.com</button> 
        </form>

    </div>
        ); 
    };
}
export default Contact;