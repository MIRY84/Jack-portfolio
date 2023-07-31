import React, { useRef, useState } from "react";
// Import Swiper React components


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";
import item31 from "../images/favorites/tartaruga.jpg";
import item1 from "../images/favorites/Medusa.jpg";

import item3 from "../images/favorites/orca2.jpg";
import item4 from "../images/favorites/Octopus.jpg";
import item5 from "../images/favorites/Octopustampsec.jpg";

import item7 from "../images/favorites/itrearchi.jpg";
import item8 from "../images/favorites/Spirali.jpg";
import item9 from "../images/favorites/Panda.jpg";
import item10 from "../images/favorites/mantaraya.jpg";
import item11 from "../images/favorites/Civetta.jpg";
import item12 from "../images/favorites/conchiglia.jpg";

import item14 from "../images/favorites/cantosmeraldino.jpg";
import item15 from "../images/favorites/Hippocampus.jpg";
import item16 from "../images/favorites/Ex libris Jordan Petkov (corallo).jpg";
import item17 from "../images/favorites/Maretempesta.jpg";

import item19 from "../images/favorites/Ara Macao.jpg";
import item20 from "../images/favorites/libroartista.jpg";
import item21 from "../images/favorites/Attrazione sferica.jpg";
import item22 from "../images/favorites/peacock1.jpg";

import item24 from "../images/favorites/The eye of God.jpg";
import item25 from "../images/favorites/argopanoptes.jpg";
import item26 from "../images/favorites/axolotl.jpg";
import item27 from "../images/favorites/iltutto.jpg";

import item29 from "../images/favorites/Capitale europea della cultura 2019.jpg";
import item30 from "../images/favorites/Dai gradoni di Sant'Antonio.jpg";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Carouselcomp() {
 

  return (

    <>

      <h1 className="text-center">Le mie opere</h1>

      <Container className="fluid">




      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card >
            <Card.Img variant="top" className="opere" src={item31} />
            <Card.Body>
              <Card.Title className="slide-title text-center">RETI FANTASMA</Card.Title>
            </Card.Body>

          </Card>
        </Col>

        <Col>
          <Card >
            <Card.Img variant="top" className="opere" src={item7} />
            <Card.Body>
              <Card.Title className="slide-title text-center">I TRE ARCHI</Card.Title>
            </Card.Body>

          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item3} />
            <Card.Body>
              <Card.Title className="slide-title text-center">ORCA</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item4} />
            <Card.Body>
              <Card.Title className="slide-title text-center">OCTOPUS</Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item5} />
            <Card.Body>
              <Card.Title className="slide-title text-center">OCTOPUS/Stampa A Secco</Card.Title>
            </Card.Body>

          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item14} />
            <Card.Body>
              <Card.Title className="slide-title text-center">IL CANTO DELLO SMERALDINO</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div>

        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item8} />
              <div className="slide-title text-center">SPIRALI</div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item12} />
              <Card.Body>
                <Card.Title className="slide-title text-center">NAUTILUS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item10} />
              <div className="slide-title text-center">MANTA RAYA</div>
            </Card>
          </Col>
        </Row>
      </div>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item11} />
            <Card.Title className="slide-title text-center">CIVETTA</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item12} />
            <Card.Title className="slide-title text-center">NAUTILUS</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item16} />
            <Card.Title className="slide-title text-center">EX LIBRIS JORDAN PETKOV</Card.Title>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item15} />
            <Card.Title className="slide-title text-center">HIPPOCAMPUS/TECNICA PUNTA SECCA</Card.Title>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item16} />
            <Card.Title className="slide-title text-center">EX LIBRIS JORDAN PETKOV</Card.Title>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" className="opere" src={item17} />
            <Card.Title className="slide-title text-center">MARE IN TEMPESTA</Card.Title>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4"></Row>

      <Card>
        <Card.Img variant="top" className="opere" src={item19} />
        <Card.Title className="slide-title text-center">ARA MACAO</Card.Title>
      </Card>
      <Card>
        <Card.Img variant="top" className="opere" src={item20} />
        <Card.Title className="slide-title text-center">LIBRO D'ARTISTA</Card.Title>
      </Card>
      <Card>
        <Card.Img variant="top" className="opere" src={item21} />
        <div className="slide-title text-center">ATTRAZIONE SFERICA</div>
      </Card>

      <Col>
        <Card>
          <Card.Img variant="top" className="opere" src={item22} />
          <Card.Body>
            <Card.Title className="slide-title text-center">PEACOCK</Card.Title>
          </Card.Body>

        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" className="opere" src={item24} />
          <Card.Body>
            <Card.Title className="slide-title text-center">THE EYE OF GOD</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" className="opere" src={item25} />
          <Card.Body>
            <Card.Title className="slide-title text-center">ARGO PANOPTES</Card.Title>
          </Card.Body>
        </Card>
      </Col>


      <Card>
        <Card.Img variant="top" className="opere" src={item26} />
        <Card.Body>
          <Card.Title className="slide-title text-center">AXOLOTL</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className="opere" src={item27} />
        <Card.Body>
          <Card.Title className="slide-title text-center">COME TUTTO EBBE INIZIO/NASCITA</Card.Title>
        </Card.Body>

      </Card>

      <Card>
        <Card.Img variant="top" className="opere" src={item29} />
        <Card.Body>
          <Card.Title className="slide-title text-center">Capitale europea della cultura 2019</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className="opere" src={item30} />
        <Card.Body>
          <Card.Title className="slide-title text-center"> Dai gradoni di Sant'Antonio</Card.Title>
        </Card.Body>
      </Card>


    </Container>
    </>
  );
}


export default Carouselcomp;