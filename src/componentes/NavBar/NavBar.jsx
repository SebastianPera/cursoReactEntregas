import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import '../../estilos/NavBar.css'

const NavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <NavLink to='/'>Tienda Online</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <NavLink className="dropdown-item" to='/categoria/audioyvideo'>Audio y Video</NavLink>
                        <NavLink className="dropdown-item" to='/categoria/Electrodomésticos y AC'>Electrodomésticos y AC</NavLink>
                        <NavLink className="dropdown-item" to='/categoria/Cuidado Personal'>Cuidado Personal</NavLink>
                        <NavLink className="dropdown-item" to='/categoria/Hogar y Jardín'>Hogar y Jardín</NavLink>
                        <NavLink className="dropdown-item" to='/categoria/Más Categorías'>Más Categorías</NavLink>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>Registrarse</Nav.Link>
                    <Nav.Link>Contacto</Nav.Link>
                </Nav>
                <Link to='/cart'><CartWidget/></Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar