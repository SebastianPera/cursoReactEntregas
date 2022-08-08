import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Spinner } from 'react-bootstrap';
import ItemsList from '../ItemsList';
import '../../styles/ItemListContainer.css';


const ItemListContainer = () => {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {  
    setLoading(true)
    setTimeout(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'productos')
      const queryCollectionFilter = categoryId ? query(queryCollection, where('categoria', '==', categoryId)) : queryCollection

      getDocs(queryCollectionFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, 500);

  }, [categoryId])
 
  return ( loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info"/>
    </div>
  ) : 
    <ItemsList prod={products}/>
  );
};

export default ItemListContainer