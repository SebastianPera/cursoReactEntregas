import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../estilos/ItemCount.css'

const ItemCount = ({ initial, stock, onAdd}) => {

    const [qty, setQty] = useState(initial);
    const[showButton, setshowButton] = useState(false);

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
                disabled={qty === stock ? true : null}> 
                +
                </button>
            </div>
            <button
                className="btn btn-danger text-uppercase mt-2 px-2"
                onClick={() => {onAdd(qty); setshowButton(true)}}
                disabled={stock === 0 ? true : null}>
                Añadir al carrito
            </button>
            { showButton && <Link to="/cart"><button className="btn btn-danger text-uppercase mt-2 px-2">Finalizar Compra</button></Link> }
        </div>
    )
};

export default ItemCount;


