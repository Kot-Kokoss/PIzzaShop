import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ItemsList from '../components/ItemsList';
import Pagination from '../components/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/filterSlice';

const Home = () => {
  const { categoryId, sortAscDesc, sortType, currentPage } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

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
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
