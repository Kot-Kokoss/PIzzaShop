import React from 'react';
import CartItemsList from '../CartItemsList';
import CartHeader from '../CartHeader';
import CartFooter from '../CartFooter';

const FullCart = () => {
  return (
    <>
      <div className="container container--cart">
        <div className="cart">
          <CartHeader />
          <CartItemsList />
          <CartFooter />
        </div>
      </div>
    </>
  );
};

export default FullCart;
