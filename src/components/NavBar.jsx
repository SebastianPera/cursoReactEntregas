import { useState } from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import CartWidget from './Widgets/CartWidget';
import { useAuth } from '../context/AuthContext';
import '../styles/NavBar.css'
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import User from '../img/user.png'
import { useNavigate } from 'react-router-dom';

const NavBar = () =>{
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }
 console.log(user );
  return(
    <Navbar collapseOnSelect expand="lg"  >
      <Container>
        <NavLink className="navLogo" to='/'>ComfyHouse</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavLink className="dropdown-item" to='/categoria/audioyvideo'>Audio y Video</NavLink>
                    <NavLink className="dropdown-item" to='/categoria/Electrodomésticos y AC'>Electrodomésticos y AC</NavLink>
                    <NavLink className="dropdown-item" to='/categoria/Cuidado Personal'>Cuidado Personal</NavLink>
                    <NavLink className="dropdown-item" to='/categoria/Hogar y Jardín'>Hogar y Jardín</NavLink>
                    <NavLink className="dropdown-item" to='/categoria/Más Categorías'>Más Categorías</NavLink>
                </NavDropdown>
            </Nav>
            <NavLink to='/order'>Verificar Compra</NavLink>
            <NavLink to='/cart'><CartWidget/></NavLink>
            {user ? (
              <div className="navbar_profile">
                <div className="navbar_profile_name">
                  <span>Hello</span>
                  <p> {user.displayName || user.email} </p>
                </div>
                <div className="navbar_profile_img">
                  <img
                    src={user.photoURL || User}
                    alt=""
                    onClick={() => setShow(!show)}
                  />
                  {show && (
                    <div className="navbar_profile_img_dropdown">
                      <div>
                        <AiOutlineUser />
                        <p>Profile</p>
                      </div>
                      <div>
                        <AiOutlineLogout />
                        <p onClick={handleLogout}>Logout</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              ) : (
              <NavLink to='/auth'>Sign In</NavLink>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar