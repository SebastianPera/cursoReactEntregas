import { useContext } from 'react';
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';

import '../../estilos/Cart.css'



const Cart = () => {

  const cartContext = useContext(CartContext);
  const { cart, deleteCartById, deleteCart, totalCart } = cartContext;


  return (
    <div className='cartContainer'>
      <div className='listCartContainer'>
        {cart? (cart.map( product => {
          return( <CartItem key={product.id}
                            prod={product}
                            deleteCartById={deleteCartById}/>
                );
        })) 

          : <p>cargando productos</p>
        }

        {cart.length? <div className='buttonsCart'>
                        <button
                        className='btn btn-danger text-uppercase mt-2 px-2'
                        onClick={deleteCart}
                        >Vaciar Carrito</button>
                        <button className='btn btn-danger text-uppercase mt-2 px-2'> Finalizar compra</button>
                        <p>TOTAL: ${totalCart()} </p>
                      </div> 
                      : <div>
                          <p>No hay productos en el carrito de compras</p>
                          <Link to='/'>Agregar productos</Link>
                        </div>}
      </div>
    </div>
  )
}

export default Cart