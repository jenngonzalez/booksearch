import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

    render() {
        return (
            <div className="search-form">
                <form
                    className="search-form"
                    // onSubmit={e => this.handleSubmit(e)}
                >
                    <label htmlFor="search-term-input">
                        Search:
                    </label>
                    <input
                        name="search-term-input"
                        id="search-term-input"
                        placeholder="Search Term"
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleUpdate(e.target.value)}
                    >
                    </input>
                    <button
                        type="button"
                    >
                        Search
                    </button>
                </form>
            </div>
        )
    }

}

export default SearchForm