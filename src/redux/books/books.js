import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
];

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.findIndex((book) => book.item_id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
