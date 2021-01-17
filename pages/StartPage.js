import React from 'react';
import logo from '../assets/js_logo.png';

export const StartPage = () => {

    return (
        <div className="container">
            <h1 className="title">
                StartPage
            </h1>
            <p className="subtitle has-text-info">
                My first website with <strong>Frontend-starter</strong>!
            </p>

            <figure>
                <img src={logo} />
                <figcaption>Using js</figcaption>
            </figure>
        </div>
    )
};