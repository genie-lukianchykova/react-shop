import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useCart } from './context/CartContext';

export default function ItemModal({ show, onHide, data }) {
  const { addToCart } = useCart();
  
    if (!data) return null;

  const collectionTitles = {
    "bubble-gum-btch": "Bubble Gum B*tch",
    "arabian-nights": "Arabian Nights",
    "classique": "Classique",
    "cozy-mozy": "Cozy Mozy",
    "gold-standard": "Gold Standard",
    "minimalism-era": "Minimalism Era"
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={data.image}
              alt={data.title}
              className="img-fluid rounded"
              style={{height: "20em"}}
            />
          </Col>

          <Col md={6}>
            <h5 className="mb-3 mt-3 text-muted">{data.type}</h5>
            <p>{data.description}</p>
            <p className="text-muted">
              <strong>Collection:</strong> {collectionTitles[data.collection] || data.collection}
            </p>
            <h4 className="fw-bold mb-4">{data.price}$</h4>
            <Button variant="dark" onClick={() => {
              addToCart(data);
              onHide();
            }}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}