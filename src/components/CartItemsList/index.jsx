import React from 'react';
import CartItem from '../CartItem';
import { useSelector } from 'react-redux';

function CartItemsList() {
  const list = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="content__items">
        {list.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default CartItemsList;
