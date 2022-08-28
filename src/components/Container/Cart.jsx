import { useContext } from 'react';
import { CartContext } from './../../context/CartContext';
import CartItem from '../CartItem';
import EmptyCart from '../EmptyCart'
import '../../styles/Cart.css'
import { FormOrder } from '../FormOrder';

const Cart = () => {

  const cartContext = useContext(CartContext);
  const { cart, deleteCart, totalCart } = cartContext;
  
  return cart.length? (
    <div className='cartContainer'>
      <div style={{width:'40%'}}>
        <h4>Usted está por comprar:</h4><br />
        <div className='cartItems'>
          {cart.map( product => {
            return( <CartItem key={product.id}
                              prod={product}
                              withDeleteCartById={true}/>
                  );
          })}
          <div className='buttonsCart'>
            <button className='btn btn-danger text-uppercase mt-2 px-2' onClick={deleteCart}>Vaciar Carrito</button>
            <p><b>TOTAL: ${totalCart()}</b> </p>
          </div>
        </div>
      </div>
      <FormOrder/>
    </div>

  ) : <EmptyCart />
}

export default Cart