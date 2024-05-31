import React from 'react';
import styles from './ErorItem.module.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className={styles.block}>
        <h1 className={styles.block__title}>Ничего не найдено 😕</h1>
        <p className={styles.block__info}>Данная страница не существует.</p>
        <Link to="/" className={styles.button_black}>
          Вернуться на главную{' '}
        </Link>
      </div>
    </>
  );
};

export default Error;
