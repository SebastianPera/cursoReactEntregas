import { useContext } from 'react'
import { CartContext} from '../context/CartContext.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../estilos/ItemCount.css'

const ItemCount = ({ initial, onAdd, prod}) => {

    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
    const [ qty, setQty ] = useState(initial);
    const [ showButton, setshowButton ] = useState(false);
    let [ prodCart ] = useState({});
    let [ stockComparativo1 ] = useState(prod.stock);
    let [ stockComparativo2 ] = useState(prod.stock);
    

    // Comparo stock con cantidad en el carrito

    if (cart.some(el => el.id === prod.id)) {
        let index = cart.findIndex(el => el.id === prod.id);
        prodCart = (cart[index]);       
        stockComparativo1 = prod.stock - prodCart.qty;  
        console.log(stockComparativo1);
    }else{
        prodCart = {...prod, qty};  
        stockComparativo2 = prod.stock - prodCart.qty;
        console.log(stockComparativo2);
    }

    const addProduct = (num) => {
        setQty(qty + num);
    };
    

    return(
        <div className='containerItemCount'>
            <div>
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
                disabled={(stockComparativo2 === 0 || stockComparativo1 <= qty) ? true : null}>
                +
                </button>
            </div>
            {(stockComparativo1 === 0) ||<button className="btn btn-danger text-uppercase mt-2 px-2" onClick={() => {onAdd(qty); setshowButton(true); setQty(initial)}} disabled={(stockComparativo1 === 0) ? true : null}>
                Añadir al carrito
            </button>
            }
            { (showButton || cart.length !== 0 ) && <Link to="/cart"><button className="btn btn-danger text-uppercase mt-2 px-2">Finalizar Compra</button></Link> }
        </div>
    )
};

export default ItemCount;


