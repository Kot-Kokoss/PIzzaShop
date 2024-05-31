import React, { useState } from 'react';

function Categories() {
  const [active, setActive] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, i) => (
          <li key={i} onClick={() => setActive(i)} className={active === i ? 'active' : ''}>
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
