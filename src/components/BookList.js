import React, { useState } from 'react';
import Book from './myBook';
import Form from './BookForm';

function BookList() {
  const [myBooks] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      author: 'AJ',
    },
    {
      id: 2,
      title: ' create website and add content',
      author: 'AJ',
    },
    {
      id: 3,
      title: 'Ready to deploy it',
      author: 'AJ',
    },
  ]);

  return (
    <>
      {myBooks.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
}

export default BookList;
