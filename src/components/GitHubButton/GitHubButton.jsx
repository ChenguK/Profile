import React from 'react';
import GitLogo from './github-logo.jpg';
import styles from './GitHubButton.module.css';

const GitHubButton = () => (
    <button
    className={styles.git} 
    style={{
        backgroundColor: '#68b0ab',
        cursor: 'pointer',
        border: 'none',
    }} 
    >
       <span>
           <img className={styles.git} src={ GitLogo } alt="GitHub"/> 
        </span>
    </button>
)

export default GitHubButton;