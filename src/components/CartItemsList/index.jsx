import React from 'react';
import CartItem from '../CartItem';

function CartItemsList() {
  let list = [1, 2, 3, 4, 5];
  return (
    <>
      <div class="content__items">
        {list.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
    </>
  );
}

export default CartItemsList;
