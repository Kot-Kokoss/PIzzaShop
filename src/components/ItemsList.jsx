import React from 'react';
import PizzaItem from './PizzaItem';
import { Skeleton } from './PizzaItem/Skeleton';

function ItemsList({ searchValue, isLoading, list }) {
  // static metod
  const pizzas = list
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => <PizzaItem key={item.id} {...item} />);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) : pizzas}
        {}
      </div>
    </>
  );
}

export default ItemsList;
