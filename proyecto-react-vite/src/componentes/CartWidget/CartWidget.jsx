import imagenCart from '../../imagenes/imagenCart.png'
import '../../estilos/CartWidget.css'

const CartWidget = () => {
  return (
    <div className='contenedorCarrito'>
        <img src={imagenCart} alt="carrito" className='imagenCart' />
    </div>
  )
}

export default CartWidget