import React from 'react';
import Books from './Books';
import AddBook from './AddBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'AJ',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'AJ',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
