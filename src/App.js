import React, {Component} from 'react';
import './App.css';
import ResultsList from './ResultsList/ResultsList';
import SearchBar from './SearchBar/SearchBar';
import { getBooks } from './common/api';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All',
      results: [],
    }
  }

  populateBooks() {
    getBooks(this.state.searchTerm)
      .then(results => {
        this.setState({ results })
        this.render()
      })
      .catch(err => {
        console.log(err.message)
      })
  }


  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    }, () => {
      this.populateBooks();
    })
  }
  

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main className='App'>
          <div>
            {this.state.error}
          </div>
          <SearchBar
            searchTerm={this.state.searchTerm}
            filterOption={this.state.filterOption}
            handleUpdate={term => this.updateSearchTerm(term)}
            handleFilterChange={option => this.updateFilterOption(option)}
          />
          <ResultsList
            results={this.state.results}
            searchTerm={this.state.searchTerm}
            filterOption={this.state.filterOption}
          />
        </main>
      </div>
    );
  }
}

export default App;
