import React from 'react';
import { Carousel } from 'react-bootstrap';
import samplehomepro1 from '../../images/samplehome1.jpeg';
import samplehomepro2 from '../../images/samplehome2.jpeg';
import samplehomepro3 from '../../images/samplehome3.jpeg';

const CarouselContainer = () => {
    return(
        <Carousel fade={true}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={samplehomepro1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={samplehomepro2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={samplehomepro3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}


export default CarouselContainer;