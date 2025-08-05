import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const items = [
  {
    id: 1,
    title: "Bubble Gum B*tch",
    desc: "Sugar, spice, and zero apologies. Pink lights for main character energy.",
    image: require("../img/bubbleGum.png"),
  },
  {
    id: 2,
    title: "Arabian Nights",
    desc: "Dripping in drama. Velvet shadows, golden glow — mystery never looked this good.",
    image: require("../img/arabianNights.png"),
  },
  {
    id: 3,
    title: "Classique",
    desc: "Old money style, no dust. Think marble halls and perfectly placed lighting.",
    image: require("../img/classique.png"),
  },
  {
    id: 4,
    title: "Cozy Mozy",
    desc: "Soft lights, warm woods, all the cozy feels. Like a hug—but for your whole room.",
    image: require("../img/cozy.png"),
  },
  {
    id: 5,
    title: "Gold Standard",
    desc: "All that glitters is gold. Loud, luxe, and impossible to ignore.",
    image: require("../img/gold.png"),
  },
  {
    id: 6,
    title: "Minimalism Era",
    desc: "No clutter. No chaos. Just clean lines and quiet confidence.",
    image: require("../img/minimal.png"),
  },
];

export default function ShowSection() {
  return (
    <section className="py-5 bg-light text-body">
      <Container>
        
        <h2 className="mb-1 fw-bold">Collections</h2>
        <p className="mb-5 fw-light">
          Lighting, but with a personality. Bold collections for bold spaces — pick your vibe.
        </p>

        <Row className="g-5">
          {items.map(item => (
            <Col key={item.id} xs={6} sm={8} md={6} lg={4}>
              <Card className="shop-card h-100 d-flex flex-column">
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  className="rounded-top-4" 
                />
                <Card.Body className="d-flex flex-column text-body">
                  <Card.Title className="fw-semibold fs-5">{item.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">{item.desc}</Card.Text>
                  <div className="mt-3">
                    <Button 
                      variant="outline-dark" 
                      className=""
                    > More <FaArrowRight className="ms-2" />
                  </Button>
                  </div>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
