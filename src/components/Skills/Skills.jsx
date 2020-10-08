import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <div className="skills left-align">
                <h5>Things I know.. </h5>
                <ul >
                    <li>HTML5 // Javascript // JQuery </li>
                    <li>RESTful Routes to CRUD Mapping // APIs</li>
                    <li>CSS // Bootstrap // Materialize </li>
                    <li>React // NodeJS // </li>
                    <li>Python // Django // JSON</li>
                    <li>Mongodb // Postgresql // AWS (S3, IAM)</li>
                    <li>Version Control // GitHub // Slack </li>
                    <li>Audio Recording and Editing // Adobe Premiere // Final Cut</li>
                    <li>Adobe Photoshop // Photography</li>
                    <li>Wordpress // SEO Optimization // Google Analytics</li> 
                    <li> Authentication ( Google People Api and language based)// Authorization</li>
                </ul>
            </div>
        )
    }
}

export default Skills;