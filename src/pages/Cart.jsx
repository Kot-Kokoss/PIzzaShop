import React, { useState } from 'react';
import EmptyCart from '../components/EmptyCart';
import FullCart from '../components/FullCart';

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return <>{isEmpty ? <EmptyCart /> : <FullCart />}</>;
};

export default Cart;
