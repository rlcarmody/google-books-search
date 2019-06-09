import React, { Component } from 'react';
import Card from '../../Components/Card';
import Navbar from '../../Components/Navbar';
import API from '../../utils/API';

export default class Home extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    API.getSavedBooks()
      .then(data => this.setState({ books: data }));
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Navbar />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '10px' }}>
          {books
            && books.map(book => (
              <Card {...book} key={book.id} activeText="Remove From Saved" />
            ))}
        </div>
      </div>
    );
  }
}
