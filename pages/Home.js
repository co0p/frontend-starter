import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import jsImage from 'url:../assets/js_logo.png';
import reactImage from 'url:../assets/reactjs.jpg';
import jestImage from 'url:../assets/jest.png';
import bulmaImage from 'url:../assets/bulma.png';
import parcelImage from 'url:../assets/parcel.png';
import scssImage from 'url:../assets/scss.png';
import testingImage from 'url:../assets/testinglib.png';

const techChoices = [
    {
        id: "javascript",
        label: "JavaScript",
        image: jsImage
    }, {
        id: "reactjs",
        label: "ReactJs",
        image: reactImage
    }, {
        id: "jest",
        label: "Jest",
        image: jestImage
    }, {
        id: "testinglib",
        label: "React Testing Lib",
        image: testingImage
    }, {
        id: "bulma",
        label: "bulma.io",
        image: bulmaImage
    }, {
        id: "parcel",
        label: "Parcel.js",
        image: parcelImage
    }, {
        id: "scss",
        label: "Scss",
        image: scssImage
    }];

export const Home = () => {
    const history = useHistory();

    const [selectedTech, setSelectedTech] = useState({});

    const selectTech = (tech) => {
        setSelectedTech(tech);
    }

    const handleSearchJob = () => {
        const label = selectedTech.label.toLowerCase()
        history.push(`/jobs/${label}`);
    }

    const techBoxes = techChoices.map(choice => {

        const selectedClass = selectedTech.id === choice.id ? " is-active" : "";
        return (
            <div className="column is-3" key={choice.id} onClick={() => selectTech(choice)}>

                <a className={"box " + selectedClass}>
                    <div className="content">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={choice.image}/>
                        </figure>
                        <p> {choice.label} </p>
                    </div>
                </a>
            </div>
        )
    });

    return (
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column">
                        Select your favourite tech(s) and search for a suitable job
                    </div>
                    <div className="column is-5">
                        {selectedTech.id &&
                        <button onClick={() => handleSearchJob()} className="button is-large is-centered is-fullwidth">Get me a job for: <span className="has-text-weight-bold">{selectedTech.label}</span>!</button>
                        }
                        {!selectedTech.id &&
                        <button className="button is-large is-centered is-fullwidth" disabled={true}>Find me a job</button>
                        }
                    </div>
                </div>
            </section>
            <div className="section columns is-multiline">
                {techBoxes}
            </div>


        </div>
    )
};