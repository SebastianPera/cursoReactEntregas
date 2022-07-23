import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemsList from '../ItemsList';
import '../../estilos/ItemListContainer.css';


const ItemListContainer = () => {
  const [products , setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  // const url = './bd.json'

  useEffect(() => {
    setLoading(true)
    if (categoriaId){
      setTimeout(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoriaId))
        getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }, 500);

    }else{
      loading = true;
      if(loading){
        setTimeout(() => {
          const db = getFirestore();
          const queryCollection = collection(db, 'productos')
          getDocs(queryCollection)
          .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
        }, 500);
      }else{
        console.log('400 not found');
      }
    }
  }, [categoriaId])
  

  // useEffect(() => {
  //   setLoading(true)
  //   if (categoriaId) {
  //     setTimeout(() => {
  //       fetch(`.${url}`)
  //       .then((res) => res.json())
  //       .then(data => setProducts(data.filter( prod => prod.categoria === categoriaId)))
  //       .catch(err => console.log(err))
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //     }, 1000);   

  //   } else {  
  //     loading = true;
  //     if (loading) {
  //       setTimeout(() => {
  //         fetch(url)
  //         .then((res) => res.json())
  //         .then(data => setProducts(data))
  //         .catch(err => console.log(err))
  //         .finally(() => {
  //           setLoading(false);
  //         });
  //       }, 1000);
  //     } else {
  //       console.log('400 not found');
  //     }
  //   }
  // }, [categoriaId])

 
  return ( loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info"/>
    </div>
  ) : 
    <ItemsList producto={products}/>
  );
};

export default ItemListContainer
