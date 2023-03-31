import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import item1 from "../images/favorites/Medusa.jpg";
import item2 from "../images/favorites/Orca.jpg";
import item3 from "../images/favorites/Octopus.jpg";
import item4 from "../images/favorites/Panda.jpg";
import item5 from "../images/favorites/Spirali.jpg";
import { Container } from 'react-bootstrap';

function Carouselcomp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Medusa</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Orca</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Panda</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Spirali</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}


export default Carouselcomp;