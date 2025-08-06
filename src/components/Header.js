import React from 'react';
import { Button, Navbar, Nav, Badge} from 'react-bootstrap';
import logo from '../img/logo.svg';
import { FaShoppingCart } from "react-icons/fa";
import ShopCart from './ShopCart';
import { useCart } from './context/CartContext';

export default function Header() {
  const { cart, toggleCart, cartOpen, closeCart } = useCart();

  return (
    <div>
      <Navbar expand="lg" className="bg-white py-4 px-5 fixed-top shadow-sm">       
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
              <div className="position-relative">
                <span className="d-none d-sm-inline fw-normal">Your Cart</span>
                <FaShoppingCart className="ms-2" size="30" />
                <Badge
                  bg="secondary"
                  pill
                  className="position-absolute translate-middle"
                  style={{ fontSize: '0.65rem' }}
                >
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              </div>
            </Button>
          </Nav>      
      </Navbar>
      <ShopCart show={cartOpen} onClose={closeCart} />
    </div>
  )
}
