import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function ShopCart({ show, onClose }) {
  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Your shopping cart is currently empty.</p>
        
      </Offcanvas.Body>
    </Offcanvas>
  );
}