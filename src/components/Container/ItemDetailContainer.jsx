import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import  ItemDetail  from '../ItemDetail'
import { getProduct } from "../../firebase/productService";
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product , setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getProduct(id).then(product => {
          setProduct(product)
      }).finally(() => {
          setLoading(false)
      })
    }, 500);  
  }, [id])
  
  return ( loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info"/>
    </div>
  ) : 
    <ItemDetail prod={product}/>
  );
}

export default ItemDetailContainer