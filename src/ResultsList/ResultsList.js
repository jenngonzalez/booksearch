import React, { Component } from 'react'
import './ResultsList.css'
import Results from './Results/Results'

class ResultsList extends Component {

    render() {
        const results = this
        .props
        .results
        .map((results, i) => <Results { ...results } key={i}/>);
        return (
            <div className="results-list">
                {results}
            </div>
        )
    }
};

ResultsList.defaultProps = {
    results: []
};


export default ResultsList;