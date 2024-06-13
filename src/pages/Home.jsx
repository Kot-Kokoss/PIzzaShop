import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ItemsList from '../components/ItemsList';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortAscDesc, setSortAscDesc] = React.useState('desc');
  const [sortType, setSortType] = React.useState({
    name: 'рейтингу',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://6637bb3c288fedf693812f99.mockapi.io/pizza-react?${
        categoryId === 0 ? '' : `category=${categoryId}`
      }&sortBy=${sortType.sortProperty}&order=${sortAscDesc}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при загрузке данных');
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortAscDesc]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
          <Sort
            sortType={sortType}
            onClickSortType={(filter) => setSortType(filter)}
            sortAscDesc={sortAscDesc}
            onClickSortAscDesc={setSortAscDesc}
          />
        </div>
        <ItemsList searchValue={searchValue} isLoading={isLoading} list={items} />
      </div>
    </>
  );
};

export default Home;
