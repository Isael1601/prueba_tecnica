import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../NavBar/navBar.scss";
import Store2 from "../assets/store2.svg";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='nav' fluid>
        <Navbar.Brand href="#"><img className='logo' src={ Store2 } alt="Tienda" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="a" as={Link} to='/Inicio'>Inicio</Nav.Link>
            <Nav.Link className="a" as={Link} to='/Clientes'>Clientes</Nav.Link>
            <Nav.Link className="a" as={Link} to='/Tienda' >Tienda</Nav.Link>
            <Nav.Link className="a" as={Link} to='/Productos'>Productos</Nav.Link>
            <Nav.Link className="a" as={Link} to='/Carrito' ><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;