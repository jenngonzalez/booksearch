import React, { Component } from 'react';
import './Results.css';

class Results extends Component {

    render() {
        return (
            <div className="book-results">
               <div className="book-image">
                <img src={this.props.cover} alt="book cover" />
               </div>
               <div className="book-title">
                <h2>{this.props.title}</h2>
               </div>
               <div className="author-name">
                <h3>{this.props.author}</h3>
               </div>
               <div className="book-price">
                <h4>{this.props.price}</h4>
               </div>
               <div className="book-description">
                <p>{this.props.description}</p>
               </div>
            </div>
        )
    }
}

export default Results