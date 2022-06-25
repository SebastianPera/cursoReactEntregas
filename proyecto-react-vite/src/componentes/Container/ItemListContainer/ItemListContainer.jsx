import React from 'react'
import '../../../estilos/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='containerGreeting'>{greeting}</div>
  )
}

export default ItemListContainer