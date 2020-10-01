import React, { Component } from 'react';
import Res from './ChenguKargboresume.docx';
import './Resume.css';

class Resume extends Component {
    render () {
        return (
        <div className="Resume container">
            <h5>Resume</h5>
        Click to <a className="button" href={ Res } download>Download </a>
        </div>
        );
    };
}

export default Resume;