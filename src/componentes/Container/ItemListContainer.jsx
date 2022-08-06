import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemsList from '../ItemsList';
import '../../estilos/ItemListContainer.css';


const ItemListContainer = () => {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {  
    setLoading(true)
    setTimeout(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'productos')
      const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria', '==', categoriaId)) : queryCollection

      getDocs(queryCollectionFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, 500);

  }, [categoriaId])
 
  return ( loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info"/>
    </div>
  ) : 
    <ItemsList producto={products}/>
  );
};

export default ItemListContainer