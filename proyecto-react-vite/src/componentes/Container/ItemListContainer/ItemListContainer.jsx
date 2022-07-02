import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { gFetch } from '../../../assets/bd'
import ItemsList from '../../ItemList/ItemsList';
import '../../../estilos/ItemListContainer.css';

const ItemListContainer = () => {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch
      .then((resp) => {
        setProducts(resp);
      })
      .catch((rej) => {
        console.log(rej);
      })
      .finally(() => {
        setLoading(false);
      });
  },[]);
 
  return ( loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info"/>
    </div>
  ) : 
    <ItemsList producto={products}/>
    
  );
};

export default ItemListContainer
