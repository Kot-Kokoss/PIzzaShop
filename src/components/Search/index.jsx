import { useRef, useState, useCallback } from 'react';
import { debounce } from 'lodash';

import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setSearchValue } from '../../redux/slices/filterSlice';

export const Search = () => {
  const dispatch = useDispatch();

  const searchRef = useRef(null);
  const { searchValue } = useSelector(selectFilter);
  const [value, setValue] = useState('');

  const onClickClear = (e) => {
    dispatch(setSearchValue(''));
    setValue('');
    searchRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeSearch = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.main}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32">
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      <input
        id={searchRef}
        ref={searchRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={onChangeSearch}
      />
      {searchValue && (
        <svg
          onClick={() => onClickClear()}
          className={styles.clearIcon}
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M45.43,44a1,1,0,0,1-.7,1.71,1,1,0,0,1-.71-.3l-12-12-12,12a1,1,0,0,1-.71.3,1,1,0,0,1-.7-1.71l12-12-12-12A1,1,0,1,1,20,18.57l12,12,12-12A1,1,0,1,1,45.43,20l-12,12Z" />
        </svg>
      )}
    </div>
  );
};
