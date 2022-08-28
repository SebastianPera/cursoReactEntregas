import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import imageCart from '../../img/imageCart.png'
import '../../styles/CartWidget.css'

const CartWidget = () => {

  const [ productsLength, setProductsLength ] = useState(0);
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  useEffect(() => {
    setProductsLength(
      cart?.reduce((previous, current) => previous + current.qty, 0)
    );
  }, [cart]);
  

  return (
    <div className='containerCart position-relative'>
      <img src={imageCart} alt="cartImg" className='imageCart' />
      <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style={{}}>{cart.length ? productsLength : ""}</span>
    </div>
  )
}

export default CartWidget