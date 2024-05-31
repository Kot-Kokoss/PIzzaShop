import React from 'react';
import EmptyCartImg from '../../assets/img/empty-cart.png';
import styles from './EmptyCart.module.scss';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
      <div className="content">
        <div className={styles.block}>
          <h1 className={styles.block__title}>Корзина пустая 😕</h1>
          <p className={styles.block__info}>
            Вероятней всего, вы не заказывали ещё пиццу. <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <div className={styles.block__image__wrap}>
            <img className={styles.block__image} src={EmptyCartImg} alt="Empty-cart" />
          </div>
          <Link to="/">
            <button className={styles.button_black}>Вернуться назад</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
