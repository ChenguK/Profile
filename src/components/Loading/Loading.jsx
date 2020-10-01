import React, { Component } from 'react';

class Loading extends Component {
    render () {
        return (
    <div>
        <video height="100%">
            <source src="%PUBLIC_URL%/images/code.mp4" type="video/mp4" />
            Your browser does not support HTML video
        </video>
        <br/>

        <p >Video by <a href="https://pixabay.com/users/ChristianBodhi-9869182/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=47802">Christian Bodhi</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=47802">Pixabay</a></p>
    </div>
        );
};
};
export default Loading;