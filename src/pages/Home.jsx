import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import Sort, { PopupFilters } from '../components/Sort';
import ItemsList from '../components/ItemsList';
import Pagination from '../components/Pagination';

import { selectFilter, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizza } from '../redux/slices/pizzaSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sortAscDesc, sortType, currentPage } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async (params) => {
    const { categoryId, sortAscDesc, sortType, currentPage } = params;
    dispatch(fetchPizzas({ categoryId, sortAscDesc, sortType, currentPage }));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortType = PopupFilters.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas({ categoryId, sortType, sortAscDesc, currentPage });
    }

    isSearch.current = false;
  }, [categoryId, sortType, sortAscDesc, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        sortAscDesc,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, sortAscDesc, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <ItemsList status={status} list={items} />
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
