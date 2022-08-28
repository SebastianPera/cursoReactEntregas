

const OrderTable = ({order}) => {
  const items = order.items
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        {  
          items.map((item, index) => (
            <tr key={index}>
              <td>
                {item.title}
              </td>
              <td>
                {item.quantity}
              </td>
              <td>
                {item.price}
              </td>
            </tr>
          ))
        }
        </tbody>
        <tfoot>
          <tr>
            <td>
              {items.total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
} 

export default OrderTable