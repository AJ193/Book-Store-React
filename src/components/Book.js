import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './myButton';
import { removeBook } from '../redux/books/booksSlice';

function MyBookss({ id, title, author }) {
  const dispatch = useDispatch();
  const handelRemoveBook = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <div>
        <ul>

          <li id={id}>
            <h4>
              Title :
              {title}
            </h4>
            <p>
              Author :
              {author}
            </p>
            <Button className="remove-book" type="button" value="Remove" onClick={handelRemoveBook} />
          </li>

        </ul>
      </div>

    </>
  );
}
MyBookss.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default MyBookss;