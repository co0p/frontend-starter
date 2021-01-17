import React from 'react';
import logo from '../assets/js_logo.png';

export const StartPage = () => {

    return (
        <div className="container">
            <h1 className="title">
                StartPage
            </h1>
            <p className="subtitle has-text-info" data-testid="welcomeMessage">
                My first website with <strong>Frontend-starter</strong>!
            </p>

            <figure>
                <img src={logo}  alt={''}/>
                <figcaption>Using js</figcaption>
            </figure>
        </div>
    )
};