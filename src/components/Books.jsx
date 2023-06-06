import React from 'react';
import PropTypes from 'prop-types';
import styles from './Books.module.css';

const Book = ({ title, author }) => (
  <div>
    <div className={StyleSheet.book}>
      <div className={styles.description}>
        <p>{title}</p>
        <p>{author}</p>
        <button type="button">Remove</button>
      </div>
    </div>
  </div>
);
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
