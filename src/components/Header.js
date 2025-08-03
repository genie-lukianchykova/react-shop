import React, { useState } from 'react';
import { Button, Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../img/logo.svg';
import { FaShoppingCart } from "react-icons/fa";
import ShopCart from './ShopCart';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(prev => !prev);
  const closeCart = () => setCartOpen(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-white py-4 px-5 fixed-top shadow-sm">
        <Container fluid>
          <Navbar.Brand>  
            <img
              src={logo}
              width="160"
              height="30"
              className="d-inline-block align-top"
              alt="Lumos"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
            <Nav className="ms-auto align-items-center">
            <Button
              variant="outline-light"
              className={`cart-button mx-2 my-2 my-lg-0 ${cartOpen && 'active'}`}
              onClick={toggleCart}
            >
              <FaShoppingCart className="me-2" />
              Your Cart
            </Button>
          </Nav>
          </Navbar.Collapse> 
             
        </Container>       
      </Navbar> 
      <ShopCart show={cartOpen} onClose={closeCart} />
    </div>
  )
}
