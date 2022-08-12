import '../styles/CartItem.css'

const CartItem = ({ prod, deleteCartById}) => {
  return (
    <article className="cardCart">
      <div className="containerImg">
          <img src={require(`../../src/img/products/${prod.imagen}`)} alt={prod.nombre} />
      </div>
      <span className="itemName">{`(x ${prod.qty}) - ${prod.nombre}`}</span>
      <span className="itemPrice">$ {prod.precio * prod.qty}</span>
      <div className="containerBottom">
        <button className="btn btn-danger" onClick={()=>deleteCartById(prod.id)}>X</button>
      </div>
    </article>
  )
}

export default CartItem