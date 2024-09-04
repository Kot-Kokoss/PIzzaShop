import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ItemsList from '../components/ItemsList';
import Pagination from '../components/Pagination';

import { useSelector } from 'react-redux';

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortAscDesc = useSelector((state) => state.filter.sortAscDesc);
  const sortType = useSelector((state) => state.filter.sortType);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    // fetch(
    //   `https://6637bb3c288fedf693812f99.mockapi.io/pizza-react?page=${currentPage}&limit=8&${
    //     categoryId === 0 ? '' : `category=${categoryId}`
    //   }&sortBy=${sortType.sortProperty}&order=${sortAscDesc}`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.warn(err);
    //     alert('Ошибка при загрузке данных');
    //   });

    axios
      .get(
        `https://6637bb3c288fedf693812f99.mockapi.io/pizza-react?page=${currentPage}&limit=8&${
          categoryId === 0 ? '' : `category=${categoryId}`
        }&sortBy=${sortType.sortProperty}&order=${sortAscDesc}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, sortAscDesc, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <ItemsList isLoading={isLoading} list={items} />
        <Pagination onChangePage={setCurrentPage} />
      </div>
    </>
  );
};

export default Home;
