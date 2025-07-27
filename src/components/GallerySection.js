import React from 'react'
import { Button, Carousel } from 'react-bootstrap'

const lamps = [
  {
    id: 1,
    image: require("../img/lamp1.png"),
    title: "Crafted to shine."
  },
  {
    id: 2,
    image: require("../img/lamp2.png"),
    title: "Designed to inspire."
  },
  {
    id: 3,
    image: require("../img/lamp3.png"),
    title: "Powered by Lumos."
  },
];

export default function GallerySection() {
  return (
    <Carousel>
      {
        lamps.map(lamp => {
            return(
                <Carousel.Item key={lamp.id}>
                    <img
                        className="d-block w-100 carousel-img"
                        src={lamp.image}
                        alt={"Slide " + lamp.id}
                    />
                    <Carousel.Caption className="carousel-caption-custom">
                        <h2 className="carousel-title">{lamp.title}</h2>
                        <Button variant="outline-light" size="lg">Shop now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
      }  
      
      
        
        
    </Carousel>
  )
}
