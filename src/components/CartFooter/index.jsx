import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

const CartFooter = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const countItems = items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);
  return (
    <>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            {' '}
            Всего пицц: <b>{countItems} шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>{totalPrice} ₽</b>{' '}
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to="/" className="button button--outline button--add go-back-btn">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Вернуться назад</span>
          </Link>
          <button className="button pay-btn">
            <span>Оплатить сейчас</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartFooter;
