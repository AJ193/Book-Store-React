import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'Book 1',
      author: 'AJ',
    },
    {
      item_id: 'item2',
      title: 'Book 2',
      author: 'AJ',
    },
    {
      item_id: 'item3',
      title: 'Book 3',
      author: 'AJ',
    },
  ],
};

const myBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = myBooksSlice.actions;

export default myBooksSlice.reducer;
