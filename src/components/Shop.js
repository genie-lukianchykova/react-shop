import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useFetch from './hooks/useFetch';

export default function Shop() {
  const {items, isPending, error} = useFetch('http://localhost:8000/items');
  
  return (
    <section className="py-3 bg-light text-body">
      <Container>
        <p className="text-muted mb-5">
          <Link to="/" className="text-body-secondary">Start Page</Link> <FaAngleRight/> All Products
        </p>
        <h2 className="mb-5 fw-bold">All products</h2>
        { error && <div className="mb-5">{ error }</div>}
        { isPending && <div className="mb-5">Loading...</div> }

        <Row className="g-5">
          {items && items.map(item => (
            <Col key={item.id} xs={6} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0">
                <Card.Img 
                  variant="bottom" 
                  src={item.image}      
                />
                <Card.Body className="flex-column justify-content-between">
                  <Card.Title className="fs-5 fw-semibold mb-1">{item.title}</Card.Title>
                  <Card.Text className="mb-4">{item.price}$</Card.Text>
                  <Button 
                    variant="dark"
                    className="ms-auto d-block"
                  > Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
