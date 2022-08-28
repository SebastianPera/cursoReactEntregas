import { Link } from "react-router-dom";
import '../styles/EmptyCart.css'

const EmptyCart = () =>{
  return(
    <div className="bd-grid">
      <i className="bx bx-shopping-bag big-icon dark-color-light"></i>
      <h3 className="dark-color-light">¡No tienes productos por comprar!</h3>
      <small className="dark-color-light">Una vez que agregues productos, los veras reflejados aqui.</small>
      <div className="mt-6">
        <Link to="/">
          <button className="btn btn-danger text-uppercase mt-2 px-2">Ver productos</button>
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart