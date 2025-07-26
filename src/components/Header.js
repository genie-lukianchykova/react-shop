import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.svg';

export default function Header() {
  return (
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
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-5">About Us</Nav.Link>
            <Nav.Link href="#link" className="mx-5">Contacts</Nav.Link>
            <Nav.Link href="#link" className="mx-5">Log-in</Nav.Link>
          </Nav>      
      </Navbar>
  )
}
