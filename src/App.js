import React, {Component} from 'react';
import './App.css';
import ResultsList from './ResultsList/ResultsList';
import SearchBar from './SearchBar/SearchBar';
import { getBooks } from './common/api';

// const results = [
//   {
//   cover: "Example Cover",
//   title: "Example Title",
//   price: "Example Price",
//   description: "Example Description"
//   },
//   {
//     cover: "Example Cover",
//     title: "Example Title",
//     price: "Example Price",
//     description: "Example Description"
//   }
// ];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Game of Thrones',
      filterOption: 'All',
      results: [],
    }
  }

  populateBooks() {
    getBooks(this.state.searchTerm)
      .then(results => {
        this.setState({ results })
      })
      .catch(err => {
        // handle your error
      })
  }

  componentDidMount() {
    this.populateBooks();
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })

    this.populateBooks();
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
