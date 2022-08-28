import '../styles/CartItem.css'
import { useContext } from 'react';
import { CartContext } from './../context/CartContext';
import { AiTwotoneDelete } from "react-icons/ai";

const CartItem = ({ prod, withDeleteCartById}) => {

  const cartContext = useContext(CartContext);
  const { deleteCartById } = cartContext;

  return (
    <article className="cardCart">
      <div className="containerImg">
          <img src={require(`../../src/img/products/${prod.imagen}`)} alt={prod.nombre} />
      </div>
      <span className="itemName">{`(x ${prod.qty}) - ${prod.nombre}`}</span>
      <span className="itemPrice">$ {prod.precio * prod.qty}</span>
      <div className="containerBottom">
        {
          withDeleteCartById && (
          <div className='trashButton'>
            <AiTwotoneDelete type="button" onClick={()=>deleteCartById(prod.id)} style={{fontSize:'1.6rem'}}/>
          </div>)
        }
      </div>
    </article>
  )
}

export default CartItem