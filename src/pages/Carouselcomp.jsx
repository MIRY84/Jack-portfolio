import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import item1 from "../images/favorites/Medusa.jpg";
import item2 from "../images/favorites/Orca.jpg";
import item3 from "../images/favorites/Octopus.jpg";
import item4 from "../images/favorites/Octopustampsec.jpg";
import item5 from "../images/favorites/Octopus-final.jpg";
import item6 from "../images/favorites/itrearchi.jpg";
import item7 from "../images/favorites/Spirali.jpg";
import item8 from "../images/favorites/Panda.jpg";
import item9 from "../images/favorites/Medusa.jpg";
import item10 from "../images/favorites/Civetta.jpg";
import item11 from "../images/favorites/itrearchi.jpg";
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
          src={item3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Octopus</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Octopus finale</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Octopus stampa a secco</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item6}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>I tre archi</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item7}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Spirali</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item8}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Spirali</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item9}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Spirali</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item10}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Spirali</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="" width={800} height={500}
          src={item11}
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