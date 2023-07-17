import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';

const myStore = configureStore({ reducer: categoriesReducer });
export default myStore;
