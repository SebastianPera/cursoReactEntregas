import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { Spinner } from 'react-bootstrap';
import ItemDetail from './../../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [prod , setProd] = useState([]);
  let [loading, setLoading] = useState(true);
  const url = './bd.json';


  useEffect(() => {
  
    setTimeout(() => {
      fetch(`.${url}`)
      .then((res) => res.json())
      .then(data => setProd(data.find( prod => prod.codigo === id)))
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
    }, 1500);   
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