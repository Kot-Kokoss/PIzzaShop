import React from 'react';
import PizzaItem from './PizzaItem';
import { Skeleton } from './PizzaItem/Skeleton';
import { SearchContext } from '../App';

function ItemsList({ status, list }) {
  const { searchValue } = React.useContext(SearchContext);

  const pizzas = list
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => <PizzaItem key={item.id} {...item} />);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'rejected' ? (
        <div className="content__error-info">
          <h2>Ничего не найдено 😕</h2>
          <p>Произошла ошибка загрузки, повторите позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'pending' ? skeletons : pizzas}</div>
      )}
    </>
  );
}

export default ItemsList;
