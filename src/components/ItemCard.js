import React, {useState} from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from './context/CartContext';
import ItemModal from './ItemModal';

export default function ItemCard({items}) {
  const { addToCart } = useCart();
  const [modalShow, setModalShow] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleOpenModal = (item) => {
    setActiveItem(item)
    setModalShow(true);
  };

  return (
    <>
      <Row className="g-5">
        {items && items.map(item => (
          <Col key={item.id} xs={6} sm={6} md={4} lg={3}>
            <Card className="shadow-sm border-0 h-100 d-flex flex-column">
              <Card.Img 
                variant="bottom" 
                src={item.image}
                onClick={() => handleOpenModal(item)}
              />
              <Card.Body className="d-flex flex-column">
              <Card.Title className="fs-5 fw-semibold mb-1">{item.title}</Card.Title>
              <Card.Text className="mb-4">{item.price}$</Card.Text>
              <Button 
                variant="dark"
                className="mt-auto ms-auto"
                onClick={() => addToCart(item)}
              > Add to Cart
              </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <ItemModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={activeItem}
      />
    </>
    
  )
}
