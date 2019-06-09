import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import API from '../utils/API';

const Card = ({
  title, authors, description, link, image, _id, id,
}) => {
  const [isSaved, setSaved] = useState(false);
  const saveToDB = () => {
    API.saveToDB({
      title, authors, description, image, link,
    })
      .then(() => setSaved(true));
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img src={image || 'https://via.placeholder.com/150'} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">
              {title}
            </p>
            <p className="subtitle is-6">
              {authors && `by ${[...authors]} ${_id || id}`}
            </p>
          </div>
        </div>
        <div className="content">
          <p style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {description}
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <a href={link} className="card-footer-item" target="_blank" rel="noopener noreferrer">View</a>
        <button type="button" className="card-footer-item card__button" disabled={isSaved} onClick={() => saveToDB()}>
          {isSaved ? 'Saved to DB' : 'Save'}
        </button>
      </footer>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string,
  _id: PropTypes.string,
};

Card.defaultProps = {
  authors: [''],
  description: '',
  image: '',
  id: '',
  _id: '',
};

export default Card;
