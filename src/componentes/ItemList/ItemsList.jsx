import { Container } from 'react-bootstrap';
import Items from '../Items/Items';


function ItemsList({ producto }) {

    return(
        <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
            {producto.map((element) => (
                <Items products={element} key={element.codigo} />
        ))}
        </Container>
    );
}

export default ItemsList;

