import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { Spinner } from 'react-bootstrap';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail'


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [prod , setProd] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore()
      const queryProduct = doc(db, 'productos', id)
      getDoc(queryProduct)     
      .then(resp => setProd({ id: resp.id, ...resp.data() }))
      .catch(err => console.log(err))
      .finally(() => setLoading(false) )
    }, 500);  
  }, [])
  
  return ( loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info"/>
    </div>
  ) : 
    <ItemDetail prod={prod}/>
  );
}

export default ItemDetailContainer