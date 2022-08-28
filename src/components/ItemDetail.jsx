import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext} from '../context/CartContext.js'
import ItemCount from '../components/ItemCount'
import { IoIosUndo } from "react-icons/io"
import '../styles/ItemDetail.css'


function ItemDetail({ prod }) {

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (qty) => {
    addToCart(prod, qty)
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center" style={{height: "27rem"}}>
        <div className="col-md-10 h-100">
          <div className="card h-100">
            <div className="row h-100">
              <div className="col-md-6 h-100">
                  <img id="main-image" src={require(`../../src/img/products/${prod.imagen}`)} alt={`${prod.nombre}`}/>
              </div>
              <div className="col-md-6">
                <div className="product h-100 p-3">
                  <button className="btn btn-dark px-3 py-1">
                    <Link style={{color:'white'}} to='/'><IoIosUndo/> Seguir comprando</Link>
                  </button>
                  <div className="mt-4 mb-2">
                    <h5 className="text-uppercase">{prod.nombre}</h5>
                    <div className="price d-flex flex-row align-items-center"> 
                      <span className="act-price">${prod.precio}</span>
                    </div>
                  </div>
                  <p className="about">{prod.detalle}</p>
                  <ItemCount initial={1} onAdd={onAdd} prod={prod}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default ItemDetail