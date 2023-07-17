import { configureStore } from '@reduxjs/toolkit';
import myRootReducer from './rootReducers';
import categoriesReducer from './categories/categoriesSlice';

const myStore = configureStore({ reducer: myRootReducer, categoriesReducer });
export default myStore;
