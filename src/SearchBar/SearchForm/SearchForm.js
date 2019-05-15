import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    handleSubmit(e) {
        e.preventDefault();
        let userValue = this.refs.userValue;
        let term = userValue.value;
        this.props.handleUpdate(term);
    }

  
    render() {
        return (
            <div className="search-form">
                <form
                    className="search-form"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <label htmlFor="search-term-input">
                        Search:
                    </label>
                    <input
                        name="search-term-input"
                        id="search-term-input"
                        placeholder="Search Term"
                        // value={this.props.searchTerm}
                        ref="userValue"
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }

}

export default SearchForm