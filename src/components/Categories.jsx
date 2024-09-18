import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId } from '../redux/slices/filterSlice';

export default function Categories() {
  const { categoryId } = useSelector(selectFilter);

  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, i) => (
          <li
            key={i}
            onClick={() => dispatch(setCategoryId(i))}
            className={categoryId === i ? 'active' : ''}>
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
}
