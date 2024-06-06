import React from 'react';

export default function Categories({ categoryId, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? 'active' : ''}>
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
}
