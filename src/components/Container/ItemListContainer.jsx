import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../firebase/productService'
import ItemsList from '../ItemsList';
import { Spinner } from 'react-bootstrap';
import Carrousel from './../Carrousel/Carrousel';

const ItemListContainer = () => {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {  
    setLoading(true)
    setTimeout(() => {
      if (categoryId === undefined) {
        getProducts().then(products => {
            setProducts(products)
        }).finally(() => setLoading(false))
    } else {
        getProductsByCategory(categoryId).then(products => {
            setProducts(products)
        }).finally(() => setLoading(false))
    }
    }, 500);
  }, [categoryId])
 
  return ( 
    <>
      <Carrousel/>
      {loading ? (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status" variant="info"/>
      </div> )
      : 
      <ItemsList prod={products}/>}
    </>
  )
};

export default ItemListContainer