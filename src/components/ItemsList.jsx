import React from 'react';
import PizzaItem from './PizzaItem';
import { Skeleton } from './PizzaItem/Skeleton';

function ItemsList({ isLoading, list }) {
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : list.map((item) => <PizzaItem key={item.id} {...item} />)}
        {}
      </div>
    </>
  );
}

export default ItemsList;
