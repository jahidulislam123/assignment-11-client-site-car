import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/pexels-kelson-downes-1149137.jpg'
import image2 from '../../images/pexels-kelson-downes-1149140.jpg'
import image3 from '../../images/pexels-mike-120049.jpg'
import './Carusel.css'

const Carusel = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block carusel-image w-100"
      src={image3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carusel-image w-100"
      src={image1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carusel-image w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carusel;