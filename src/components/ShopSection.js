import React from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap';

const items = [
  {
    id: 1,
    title: "Lamp 1",
    image: require("../img/lamp1.png"),
    price: "24,90",
  },
  {
    id: 2,
    title: "Lamp 2",
    image: require("../img/lamp1.png"),
    price: "24,90",
  },
  {
    id: 3,
    title: "Lamp 3",
    image: require("../img/lamp1.png"),
    price: "24,90",
  },
  {
    id: 4,
    title: "Lamp 4",
    image: require("../img/lamp1.png"),
    price: "24,90",
  },
];

export default function ShopSection() {
  return (
    <div>
      <h1>Collections</h1>
      <Container>
        <Row>
          {items.map(item => {
            return(
              <Card style={{ width: '13rem' }} key={item.id}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.price}
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
          )})}
        </Row>  
      </Container>
      
    </div>
  )
}
