import React from 'react';
import icon from '../../../images/logo2.png';
import shop from '../../../images/icons/shopping-cart.png'
import { Navbar, Container,Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
  <Container>
  <Navbar.Brand><img  className='icon' src={icon} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link ><img className='shop'src={shop} alt="" /></Nav.Link>
      <Nav.Link><button className='btn-cta'>Login</button></Nav.Link>
      <Nav.Link>
        <button className='btn-cta'>Sign up</button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </>
    );
};

export default Header;