import EmptyCart from '../components/EmptyCart';
import FullCart from '../components/FullCart';

import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const isEmpty = useSelector(selectCart).items.length;
  return <>{isEmpty ? <FullCart /> : <EmptyCart />}</>;
};

export default Cart;
