import React from 'react';
import CartItemsList from '../CartItemsList';
import CartHeader from '../CartHeader';
import CartFooter from '../CartFooter';

const FullCart = () => {
  return (
    <>
      <div class="container container--cart">
        <div class="cart">
          <CartHeader />
          <CartItemsList />
          <CartFooter />
        </div>
      </div>
    </>
  );
};

export default FullCart;
