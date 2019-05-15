import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this)
      }
    
      // need to set state before submit event happens, otherwise the first submit click won't register anything
    // handleChange(e) {
    //     let userValue=this.refs.userValue;
    //     this.props.handleUpdate(userValue.value);
    //     this.handleSubmit(e)
    // }

    handleSubmit(e) {
        e.preventDefault();
        let userValue = this.refs.userValue;
        this.props.handleUpdate(userValue.value);
        // this.props.handleUpdate(e.target.value)
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
                        // onChange={e => this.props.handleUpdate(e.target.value)}
                        // onChange={this.props.handleUpdate.bind(this)}
                        ref="userValue"
                        // onChange={e => this.props.handleUpdate(e.target.value)}
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