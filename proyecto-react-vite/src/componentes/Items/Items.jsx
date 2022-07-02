import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Items( {products} ) {
    return(
        <Card className="text-center mt-3 w-25 mx-1 shadow">
            <Card.Header as="h5">{products.nombre}</Card.Header>
            {/* <Card.Img variant="top" src={ `../../assets/img/productos/${products.imagen}` } className="p-2" /> */}
            <Card.Body>
                <Card.Text>${products.precio}</Card.Text>
                <Button>Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default Items;