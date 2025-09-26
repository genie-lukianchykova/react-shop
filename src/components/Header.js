import React, {useState, useEffect} from 'react';
import { Button, Navbar, Nav, Badge} from 'react-bootstrap';
import logo from '../img/logo.svg';
import logoLight from '../img/logo-light.svg';
import { FaShoppingCart } from "react-icons/fa";
import ShopCart from './ShopCart';
import { useCart } from './context/CartContext';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const { cart, toggleCart, cartOpen, closeCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar 
        fixed="top"
        className={`header-navbar ${isHome && !scrolled ? "top" : "scrolled"}`}
      >       
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${isHome && !scrolled ? logoLight : logo}`}
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
                <span className={`d-none d-sm-inline fw-normal 
                  ${isHome && !scrolled ? "text-white" : ""}`}
                >Your Cart</span>
                <FaShoppingCart className={`ms-2 ${isHome && !scrolled ? "text-white" : ""}`} size="30" />
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
