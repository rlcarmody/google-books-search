import React, { Component } from 'react';
import Card from '../../Components/Card';
import Navbar from '../../Components/Navbar';
import API from '../../utils/API';

export default class Home extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    API.getSavedBooks()
      .then(data => this.setState({ books: data }));
  }

  deleteBook = ({ _id }) => {
    API.deleteBook(_id)
      .then(() => this.getBooks());
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Navbar />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '10px' }}>
          {books
            && books.map(book => (
              // eslint-disable-next-line no-underscore-dangle
              <Card {...book} key={book._id} activeText="Remove From Saved" handleClick={this.deleteBook} />
            ))}
        </div>
      </div>
    );
  }
}
