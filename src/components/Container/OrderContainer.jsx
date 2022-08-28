import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOrder } from '../../firebase/orderService';
import OrderNotFound from './../OrderNotFound';
import Search from './../Search';
import OrderTable from '../OrderTable';
import formatDate from './../../firebase/util';
import { Spinner } from 'react-bootstrap';

const OrderContainer = () => {
  const [notFound, setNotFound] = useState(false)
  const [order, setOrder] = useState()
  const { idOrder } = useParams()
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setNotFound(false)
    setOrder()
    setLoading(true)
    setTimeout(() => {
      if(idOrder !== undefined){
        searchOrder(idOrder)
        setLoading(false)
      }
    }, 2000);
  }, [idOrder])

  const searchOrder = async (id, target = null) => {
    try {
      const order = await getOrder(id)
      setOrder(order)
      if(target) {
        target.reset()
      }
    } catch (error){
      setNotFound(true)
    }
  }

  return(
    <div className='d-flex align-items-center mt-5 flex-column'>
      {idOrder? 
          loading ?
            <div className="text-center mt-4">
              <Spinner animation="border" role="status" variant="info"/>
            </div>: ''
        :<Search searchOrder={ searchOrder }></Search>   
      } 
      {
        !notFound?
          order?
            <div>
              <h1>¡Gracias por su compra!</h1>
              <div>Código de compra: <b>{ order.id }</b></div>
              <p><b>Nombre:</b> { order.buyer.name }</p>
              <p><b>Fecha: { formatDate(order.date.toDate()) }</b></p>
              <OrderTable order={ order }/>
              <p><b>Total: ${ order.total }</b></p>
            </div>:''
        : <OrderNotFound/>
      }
    </div>
  )
}

export default OrderContainer