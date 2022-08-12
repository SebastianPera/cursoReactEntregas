import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext} from '../context/CartContext.js'
import '../styles/ItemCount.css'

const ItemCount = ({ initial, onAdd, prod}) => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  const [ qty, setQty ] = useState(initial);
  const [ stockComparative, setStockComparative ] = useState(prod.stock);
    

  // Comparo stock con cantidad en el carrito
  useEffect(() => {
    if (cart.some(el => el.id === prod.id)) {
      let index = cart.findIndex(el => el.id === prod.id);
      setStockComparative((prod.stock - cart[index].qty)); 
        
    }else{
      setStockComparative(prod.stock);
    }
  }, [prod.stock,cart,prod.id])
  

  const addProduct = (num) => {
      setQty(qty + num);
  };
    

  return(
  <div className='containerItemCount'>
      <div style={{width: '100%'}}>
        <button 
        className="btn btn-danger px-3 py-1" 
        onClick={() => addProduct(-1)} 
        disabled={qty === initial ? true : null}> 
        - 
        </button>
        <span> {qty} </span>
        <button 
        className="btn btn-danger px-3 py-1" 
        onClick={() => addProduct(+1)} 
        disabled={(stockComparative === 0 || stockComparative <= qty) ? true : null}>
        +
        </button>
        <b style={{marginLeft: '1rem', fontSize: '90%'}}>{`stock disponible: ${stockComparative}`}</b>
      </div>
      {stockComparative === 0 || <button className="btn btn-danger text-uppercase mt-2 px-2" style={{width: '100%'}} onClick={() => {onAdd(qty); setQty(initial)}} disabled={(stockComparative === 0) ? true : null}>
        Añadir al carrito
      </button>}
      { cart.length !== 0 && <Link to="/cart"><button className="btn btn-danger text-uppercase mt-2 px-2" style={{width: '100%'}}>Comprar</button></Link> }
    </div>
  )
};

export default ItemCount;


