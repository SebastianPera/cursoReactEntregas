import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemsList from '../../ItemList/ItemsList';
import '../../../estilos/ItemListContainer.css';


const ItemListContainer = () => {
  const [products , setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  const url = './bd.json'

  useEffect(() => {
    setLoading(true)
    if (categoriaId) {
      setTimeout(() => {
        fetch(`.${url}`)
        .then((res) => res.json())
        .then(data => setProducts(data.filter( prod => prod.categoria === categoriaId)))
        .catch(err => console.log(err))
        .finally(() => {
          setLoading(false);
        });
      }, 1500);   

    } else {  
      loading = true;
      if (loading) {
        setTimeout(() => {
          fetch(url)
          .then((res) => res.json())
          .then(data => setProducts(data))
          .catch(err => console.log(err))
          .finally(() => {
            setLoading(false);
          });
        }, 1500);
      } else {
        console.log('400 not found');
      }
    }
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
