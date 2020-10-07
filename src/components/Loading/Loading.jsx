import React, { Component } from 'react';
import './Loading.css'
import { Heart } from 'react-spinners-css';

class Loading extends Component {
    render () {
        return (
    <div className="loading">
       <Heart className="loading_heart" size={400} color="green" />
       <br/>
    </div>
        );
};
};
export default Loading;