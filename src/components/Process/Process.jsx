import React, { Component } from 'react';
import './Process.css';

class Process extends Component {
    render () {
        return (
        <div className="process left-align">
            <h5>My Process</h5>
                <h6>When approaching a new project, I make sure to... </h6>
                <ul>
                    <li>* Start by talking to client to get a full idea of the project at hand.</li>
                    <li>* What would user expect to see for a project like this. </li>
                        <li style={{ marginLeft: "1.5rem"}}> - Which expectations do we need to adhere to?</li>
                        <li style={{ marginLeft: "1.5rem"}}> - Which expectations can we have fun subverting?</li>
                    <li>* Building a wireframe </li>
                        <li style={{ marginLeft: "1.5rem"}}> - Find out how the client and I want it to look. </li>
                        <li style={{ marginLeft: "1.5rem"}}> - See if our design can inspires changes to the original plan or new features</li>
                    <li>* Based on the project as it is now defined, I choose the best suited language / framework / stack for this project.</li>
                    <li>* Based on the timeline that the client has set, I set clear, realistic goalposts for completing the project. I may also bring on other team members who have the skills to help me complete the project at a professional level by the client's due date. </li>
                   
                </ul>
        </div>
        );
    };
}

export default Process;