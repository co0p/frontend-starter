import React, {useEffect, useState} from 'react';
import {jobService} from './JobService';
import {useParams} from 'react-router-dom';

const initialState = {
    searchTerm: '',
    jobs: []
}

export const Jobs = () => {

    let {searchTerm} = useParams()
    let [state, setState] = useState(initialState);

    useEffect(() => {

        jobService.getJobs(searchTerm)
            .then(res => setState({...state, searchTerm:searchTerm, jobs: res}))
            .catch((err) => console.error("something went wrong: ", err));
    }, []);

    const rows = state.jobs.map((job, id) => (

        <a className="box" key={id} target="_blank" href={job.url}>
            <div className="columns">
                <div className="column is-2">
                    <figure className="image is-128x128">
                        <img className="is-rounded" src={job.company_logo} />
                    </figure>
                </div>
                <div className="column">
                    <div className="subtitle">{job.company}</div>
                    <div className="title">{job.title}</div>
                </div>
            </div>
        </a>
    ))

    return (
        <section className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-5">
                        <a href="/" className="button is-large is-centered is-fullwidth">Change your selection</a>
                    </div>
                    <div className="column">There are currently {state.jobs.length} job posting for {state.searchTerm}</div>
                </div>
            </div>

            <div className="section">
                {rows}
            </div>

        </section>
    );
}

