import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/Item.css'


function Item( {products} ) {
  return(
    <div className="cardStyle">
      <div className='cardCircle'>
        <img src={require(`../../src/img/products/${products.imagen}`)} alt="imagen de producto" className="cardImg" />
      </div>
      <span className="cardName">{ products.nombre }</span>
      <span className="cardPrice">${ products.precio.toFixed(2) }</span>
      <Link to={`/detail/${products.id}`} className="button-light">Comprar <i className='bx bx-right-arrow-alt button-icon'></i></Link>
    </div> 
  )
}

export default Item;