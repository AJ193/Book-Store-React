import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookss';
import '../CSSmodules/bookitem.css';

const line = {
  position: 'relative',
  top: '50px',
  right: '17vh',
  width: '5em',
  border: '1px solid #e3e3e3',
  transform: 'rotate(90deg)',
  marginRight: '-4em',
  alignitems: 'center',
};

const Books = ({ items }) => {
  const dispatchBook = useDispatch();
  const {
    id, title, author, category,
  } = items;

  return (
    <div className="book-card">
      <div className="card-left">
        <h4 className="book-category">{category}</h4>
        <h1 className="book-title">{title}</h1>
        <p className="book-author">{author}</p>
        <ul className="actions">
          <li><button type="button">Comments</button></li>
          <div className="seperator" />
          <li>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatchBook(removeBook(id));
              }}
            >
              Remove
            </button>
          </li>
          <div className="seperator" />
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="card-middle">
        <div className="progress-spinner" />
        <div className="completed">
          <p className="progress-percent">65%</p>
          <p className="progress-text">Completed</p>
        </div>
      </div>
      <div className="card-right">
        <div style={line} />
        <div>
          <h4>CURRENT CHAPTER</h4>
          <h2>Chapter 10</h2>
          <button type="button" className="primary-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Books;
