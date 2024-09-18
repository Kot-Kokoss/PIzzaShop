import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setSortAscDesc, setSortType } from '../redux/slices/filterSlice';

export const PopupFilters = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'title' },
];

export default function Sort() {
  const [popupOpen, setPopupOpen] = React.useState(false);

  const { sortAscDesc, sortType } = useSelector(selectFilter);
  const sortRef = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const path = event.composedPath();
      if (!path.includes(sortRef.current)) {
        setPopupOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <div
          className="sort__btn"
          onClick={() => dispatch(setSortAscDesc(sortAscDesc === 'asc' ? 'desc' : 'asc'))}>
          {sortAscDesc === 'desc' ? (
            <svg
              width="10"
              hesight="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
                transform="rotate(180, 5, 3)"
              />
            </svg>
          ) : (
            <svg
              width="10"
              hesight="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
          )}
        </div>
        <b>Сортировка по:</b>
        <span onClick={() => setPopupOpen(!popupOpen)}>{sortType.name}</span>
      </div>
      {popupOpen && (
        <div className="sort__popup">
          <ul>
            {PopupFilters.map((filter, i) => (
              <li
                key={i}
                onClick={() => {
                  setPopupOpen(false);
                  dispatch(setSortType(filter));
                }}
                className={filter.sortProperty === sortType.sortProperty ? 'active' : ''}>
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
