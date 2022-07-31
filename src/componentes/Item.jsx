import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../estilos/Item.css'


function Item( {products} ) {
    return(
        <Card className="text-center mt-3 w-25 mx-1 shadow cardEstilo">
            <Card.Header as="h6">{products.nombre}</Card.Header>
            <div className='contenedorImg'>
                <Card.Img variant="top" src={require(`../../src/img/productos/${products.imagen}`)} className="p-3 cardImg" />
            </div>            
            <Card.Body className='cardBody'>
                <Card.Text>${products.precio}</Card.Text>
                <Link to={`/detail/${products.id}`}>
                    <Button>Ver detalle</Button>
                </Link>
            </Card.Body >
        </Card>
    )
}

export default Item;