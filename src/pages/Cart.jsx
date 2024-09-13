import { useState } from 'react';
import EmptyCart from '../components/EmptyCart';
import FullCart from '../components/FullCart';

import { useSelector } from 'react-redux';

const Cart = () => {
  const isEmpty = useSelector((state) => state.cart.items.length);
  console.log();
  return <>{isEmpty ? <FullCart /> : <EmptyCart />}</>;
};

export default Cart;
