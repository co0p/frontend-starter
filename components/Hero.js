import React from 'react';

import logo from 'url:/assets/logo.png';

export const Hero = () => {

    return (
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">

                            <figure className="image is-128x128">
                                <img className="is-rounded" src={logo} />
                            </figure>

                        </div>
                        <div className="column">

                            <h1 className="title" data-testid="projectName">
                                Frontend-starter
                            </h1>
                            <h2 className="subtitle">
                                Example react js app using tech you can use to search for jobs!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}