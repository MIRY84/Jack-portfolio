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
  const [show, setShow] = useState(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };


  return (

    <>

      <h1 className="text-center">Le mie opere</h1>

      <Container className="fluid">




        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card >
              <div
                className="image-container"
                onMouseOver={showOverlay}
                onMouseLeave={hideOverlay}
              >
                <Card.Img variant="top" className="opere" src={item31} />
                {show && (
                  <div className="overlay">
                    <h3>Tecnica: Xilografia <br />
                      Dim. lastra: 600x400mm<br />
                      Dim. foglio: 70x50cm</h3><br />

                    <p><em> Nasce come omaggio alla bellezza delle creature marine 
                      (alla loro libertà di muoversi nell'immensità dell'oceano), poi diventa una denuncia, 
                      un grido d'allarme, di una nuova fonte di inquinamento: le "reti fantasma", 
                      reti da pesca abbandonate nei fondali, trappole vere e proprie che non lasciano via di scampo alla fauna marina
                       e che si riducono in frammenti sempre più piccoli (con il calore del sole e il movimento delle onde) 
                       fino a diventare microplastiche dannose anche per l'essere umano.</em></p>
                  </div>
                )}
              </div>
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
              <div
                className="image-container"
                onMouseOver={showOverlay}
                onMouseLeave={hideOverlay}
              >
                <Card.Img variant="top" className="opere" src={item4} />
                {show && (
                  
                  <div className="overlay">
                  
                    <h3>Tecnica: Linoleografia</h3><br />
                    
                      <p><em>Il polpo Cerca la propria sicurezza cambiando colore,<br></br> si mimetizza, cambia forma, si nasconde, scurisce l’acqua intorno a se e scappa veloce come una freccia.<br />
                      Sono incredibilmente scaltri nel camuffamento. A differenza di altri animali marini dotati di abilità mimetica, i polpi non provano ad assumere i colori dell’intero habitat che li circonda (sabbia, alghe, coralli) ma scelgono un oggetto preciso (per esempio una conchiglia) e si mettono in posa per assomigliargli.<br />
                      Sono talmente bravi nel mimetizzarsi che anche la consistenza della loro pelle può variare a scopi mimetici, possono imitare pesci velenosi e serpenti marini.</em></p>
                  </div>
                 
                )}
              </div>
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
                <Card.Body>
                  <Card.Title className="slide-title text-center">SPIRALI</Card.Title>
                </Card.Body>
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
                <Card.Body>
                  <Card.Title className="slide-title text-center">MANTA RAYA</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item11} />
              <Card.Body>
                <Card.Title className="slide-title text-center">CIVETTA</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item26} />
              <Card.Body>
                <Card.Title className="slide-title text-center">AXOLOTL</Card.Title>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item16} />
              <Card.Body>
                <Card.Title className="slide-title text-center">EX LIBRIS JORDAN PETKOV</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={3} lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item15} />
              <Card.Body>
                <Card.Title className="slide-title text-center">HIPPOCAMPUS/TECNICA PUNTA SECCA</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item1} />
              <Card.Body>
                <Card.Title className="slide-title text-center">MEDUSA</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item17} />
              <Card.Body>
                <Card.Title className="slide-title text-center">MARE IN TEMPESTA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>

              <Card.Img variant="top" className="opere" src={item19} />
              <Card.Body>
                <Card.Title className="slide-title text-center">ARA MACAO</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Img variant="top" className="opere" src={item20} />
              <Card.Body>
                <Card.Title className="slide-title text-center">LIBRO D'ARTISTA</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item21} />
              <Card.Body>
                <Card.Title className="slide-title text-center">ATTRAZIONE SFERICA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={3} className="g-4">

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
        </Row>


        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item27} />
              <Card.Body>
                <Card.Title className="slide-title text-center">COME TUTTO EBBE INIZIO/NASCITA</Card.Title>
              </Card.Body>

            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item29} />
              <Card.Body>
                <Card.Title className="slide-title text-center">CAPITALE EUROPEA DELLA CULTURA 2019</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" className="opere" src={item30} />
              <Card.Body>
                <Card.Title className="slide-title text-center"> DAI GRADONI DI SANT'ANTONIO</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </>
  )
}



export default Carouselcomp;