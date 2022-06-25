import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import '../../estilos/NavBar.css'

const NavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Tienda Online</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Registrarse</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Contacto
                    </Nav.Link>
                </Nav>
                <CartWidget/>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar