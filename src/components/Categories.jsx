import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
      {categories.map((category) => (
        <p key={uuidv4()}>{category}</p>
      ))}
    </div>
  );
};
export default Categories;
