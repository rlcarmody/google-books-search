import React, { Component } from 'react';
import Card from '../../Components/Card';
import Navbar from '../../Components/Navbar';
import API from '../../utils/API';

export default class Home extends Component {
  state = {
    books: [],
    searchValue: '',
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  saveBook = ({
    title, authors, description, link, image,
  }) => API.saveToDB({
    title, authors, description, link, image,
  });

  searchBooks = (event) => {
    event.preventDefault();
    const { searchValue } = this.state;
    const query = encodeURI(searchValue);
    API.getGoogleBooks(query)
      .then(response => this.setState({ books: response }));
  };

  render() {
    const { books } = this.state;
    return (
      <div>
        <Navbar />
        <div className="section hero is-light">
          <form onSubmit={this.searchBooks} className="field has-addons">
            <div className="control is-expanded">
              <input type="text" className="input is-rounded is-medium" onChange={this.handleInputChange} placeholder="Search for a book..." />
            </div>
            <div className="control">
              <button type="submit" className="button is-rounded is-medium">Search</button>
            </div>
          </form>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '5px' }}>
          {books
            && books.map(book => (
              <Card {...book} key={book.id} handleClick={this.saveBook} activeText="Save to List" disabledText="Saved" />
            ))}
        </div>
      </div>
    );
  }
}
