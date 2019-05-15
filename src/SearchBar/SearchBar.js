import React, { Component } from 'react';
import './SearchBar.css'
import SearchForm from './SearchForm/SearchForm'
import Filters from './Filters/Filters'

class SearchBar extends Component {

    render() {
        return (
            <div className="search-bar">
             <SearchForm
                searchTerm={this.props.searchTerm}
                handleUpdate={this.props.handleUpdate}
                handleSumbit={this.props.handleSubmit}
            />
             <Filters
                filterOption={this.props.filterOption}
                handleFilterChange={this.props.handleFilterChange}
             />
            </div>
        )
    }

}

export default SearchBar