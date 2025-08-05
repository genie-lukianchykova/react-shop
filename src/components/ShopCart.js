import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Card, Button } from 'react-bootstrap';
import { useCart } from './context/CartContext';

export default function ShopCart({ show, onClose }) {
  const { cart, removeFromCart, getTotal, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <Offcanvas show={show} onHide={onClose} placement="end" scroll={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length === 0 ? (
          <p>Your shopping cart is currently empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <Card key={index} className="mb-3 shadow-sm">
                <div className="d-flex align-items-center">
                  <Card.Img 
                    variant="start" 
                    src={item.image} 
                    style={{height: '6em', objectFit: 'cover', margin: '1em'}}
                  />
                  <Card.Body className="d-flex flex-column py-2 px-3">
                    <div>
                      <Card.Title className="fs-6 mb-1">{item.title}</Card.Title>
                      <Card.Text className="mb-2 text-muted">{item.price}$</Card.Text>
                      <div className="d-flex align-items-center">
                        <Button variant="light" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button variant="light" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
                      </div>
                    </div>
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      className="ms-auto"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </div>
              </Card>
            ))}

            <hr />
            <div className="d-flex justify-content-between fs-5 fw-bold">
              <span>Total:</span>
              <span>{getTotal()}$</span>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}