import imagenCart from '../img/imagenCart.png'
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useState } from 'react';
import '../estilos/CartWidget.css'


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
    <div className='contenedorCarrito'>
        <img src={imagenCart} alt="carrito" className='imagenCart' />
        <strong style={{color: "white"}}>{cart.length ? productsLength : ""}</strong>
    </div>
  )
}

export default CartWidget