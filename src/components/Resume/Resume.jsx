import React, { Component } from 'react';
import Res from './Chengu_Kargbo_resume.pdf';
import './Resume.css';

class Resume extends Component {
    render () {
        return (
        <div className="Resume container">
            <h5>Download my Resume</h5>
         
        <br />
        <a className="btn-floating btn-large green" href={ Res } download><i class="material-icons">
arrow_downward
</i> </a>
        </div>
        );
    };
}

export default Resume;