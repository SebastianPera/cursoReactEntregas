import '../styles/CartItem.css'


const CartItem = ({ prod, deleteCartById}) => {
  return (
    <article className="cardCarrito">
        <div className="contenedorImagen">
            <img src={require(`../../src/img/productos/${prod.imagen}`)} alt={prod.nombre} />
        </div>
        <span className="itemNombre">{`(x ${prod.qty}) - ${prod.nombre}`}</span>
        <span className="itemPrecio">$ {prod.precio * prod.qty}</span>
        <div className="contenedorBoton">
            <button className="btn btn-danger" onClick={()=>deleteCartById(prod.id)}>X</button>
        </div>
    </article>
  )
}

export default CartItem