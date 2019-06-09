/* global fetch */
export default {
  saveToDB(book) {
    return fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    }).then(response => response.json());
  },
  getGoogleBooks(query) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(({ items }) => items.map(({ volumeInfo, id }) => {
        const {
          title, authors, description, infoLink: link,
        } = volumeInfo;
        const { thumbnail: image } = volumeInfo.imageLinks || '';
        return {
          title, authors, description, link, image, id,
        };
      }));
  },
  getSavedBooks() {
    return fetch('api/books')
      .then(response => response.json());
  },
};
