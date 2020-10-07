import React, { Component } from 'react';
import './Process.css';

class Process extends Component {
    render () {
        return (
        <div className="process container left-align">
            <h5>My Process</h5>
            <br />
                <h6>When approaching a new project, I make sure to... </h6>
                <ul>
                    <li>* Start by talking to client to get a full idea of the project at hand.</li>
                    <br/>
                    <li>* What would user expect to see for a project like this. </li>
                        <li style={{ marginLeft: "1rem"}}> - Which expectations do we need to adhere to?</li>
                        <li style={{ marginLeft: "1rem"}}> - Which expectations can we have fun subverting?</li>
                    <br/>
                    <li>* Building a wireframe </li>
                        <li style={{ marginLeft: "1rem"}}> - Find out how the client and I want it to look. </li>
                        <li style={{ marginLeft: "1rem"}}> - See if our design can inspires changes to the original plan or new features</li>
                    <br/>
                    <li>* Based on the project as it is now defined, I choose the best suited language / framework / stack for this project.</li>
                    <br/>
                    <li>* </li>
                </ul>
        </div>
        );
    };
}

export default Process;