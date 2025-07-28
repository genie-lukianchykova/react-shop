import React, { useState } from 'react';
import { Button, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import logo from '../img/logo.svg';
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(prev => !prev);
  const closeCart = () => setCartOpen(false);

  return (
    <>
      <Navbar expand="lg" className="bg-white py-4">       
          <Navbar.Brand>
            <img
              src={logo}
              width="200"
              height="30"
              className="d-inline-block align-top"
              alt="Lumos"
            />
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Button
              variant="outline-light"
              className={`cart-button mx-5 ${cartOpen && 'active'}`}
              onClick={toggleCart}
            >
              <FaShoppingCart className="me-2" />
              Your Cart
            </Button>

            <Nav.Link href="#home" className="mx-4">About Us</Nav.Link>
            <Nav.Link href="#link" className="mx-4">Contacts</Nav.Link>
          </Nav>      
      </Navbar>
      <Offcanvas show={cartOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Your shopping cart is currently empty.</p>
          {/* Здесь можешь рендерить содержимое корзины */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
