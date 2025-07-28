import React, { useState } from 'react';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from '../img/logo.svg';
import { FaShoppingCart } from "react-icons/fa";
import ShopCart from './ShopCart';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(prev => !prev);
  const closeCart = () => setCartOpen(false);

  return (
    <div>
      <Navbar expand="lg" className="bg-white py-4 px-5 fixed-top">       
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
              className={`cart-button mx-4 ${cartOpen && 'active'}`}
              onClick={toggleCart}
            >
              <FaShoppingCart className="me-2" />
              Your Cart
            </Button>
          </Nav>      
      </Navbar>
      <ShopCart show={cartOpen} onClose={closeCart} />
    </div>
  )
}
