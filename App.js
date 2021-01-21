import React from 'react';

import {Hero} from './components/Hero';
import {Footer} from './components/Footer';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Home} from './pages/Home';
import {Jobs} from './pages/Jobs';

export const App = () => {
    return (
        <div>
            <Hero/>

            <section className="section">
                <Router>
                    <Switch>
                        <Route path="/jobs/:searchTerm">
                            <Jobs/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </section>
            <Footer/>
        </div>
    )
};
