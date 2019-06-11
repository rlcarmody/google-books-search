import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const {
    title, authors, description, link, image, handleClick, activeText, disabledText,
  } = props;
  const [isDisabled, setDisabled] = useState(false);

  const clickHandler = async () => {
    await handleClick(props);
    setDisabled(true);
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
              {authors && `by ${authors.join(', ')}`}
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
        <button type="button" className="card-footer-item card__button" disabled={isDisabled} onClick={clickHandler}>
          {isDisabled ? disabledText : activeText}
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
  handleClick: PropTypes.func.isRequired,
  activeText: PropTypes.string,
  disabledText: PropTypes.string,
};

Card.defaultProps = {
  authors: '',
  description: '',
  image: '',
  activeText: '',
  disabledText: '',
};

export default Card;
