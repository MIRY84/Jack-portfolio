
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";






// import required modules

import { EffectCube, Pagination } from "swiper";




import jack from "../images/jackyprofile.jpg";
import img1 from "../images/favorites/Spirali.jpg"
import item1 from "../images/favorites/Medusa.jpg";
import item2 from "../images/favorites/Orca.jpg";
import item3 from "../images/favorites/Octopus.jpg";
import item4 from "../images/favorites/Octopustampsec.jpg";
import item5 from "../images/favorites/Octopus-final.jpg";
import item6 from "../images/favorites/itrearchi.jpg";
import item7 from "../images/favorites/Spirali.jpg";
import item8 from "../images/favorites/Panda.jpg";
import item9 from "../images/favorites/mantaraya.jpg";
import item10 from "../images/favorites/Civetta.jpg";
import item11 from "../images/favorites/iltutto.jpg";
import { Container, Row, Col } from "react-bootstrap";







const Home = () => {
  return (
    <div>

      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="text-center">"L'arte e' addirittura piu' bella della realta' che con il tempo svanisce."
             Leonardo Da Vinci</h2>
          </Col>
        </Row>
        <Row>
        <Col sm={6}>
         
        <img className="jacky" width={400} src={jack} />
   
       
        </Col>
        
      
     
         <Col sm={6}>
         <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={item1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item6} />
        </SwiperSlide>
      </Swiper>
            ...
        
          </Col>
          </Row>
          <Row>
            <Col sm={12}>
            <p>Giacomo Dimichino
Nato a Bari (BA) il 03/05/1991, consegue il diploma di maturità artistica “prima
sezione Accademia” presso il Liceo Artistico Statale “C. Levi” di Matera (MT) nel
2009, dove frequenta il corso di “Fumetto e Disegno Caricaturale” con Claudio
Vino.
Nel 2009 frequenta l’Accademia Di Belle Arti di Lecce (LE) indirizzo Decorazione
con Paolo D’Orazio e Pippo Altomare, e nel 2013 frequenta un corso di Mosaico e
partecipa ad un’esposizione “IDEM NUNC UNICUM” (identità non è singolarità) a
cura di Lucy Ghionna presso l’associazione socio-artistico-culturale “Le ali di
Pandora” a Matera.
Dicembre 2016 Partecipa ad un’esposizione di pittura “Il Cinema” presso l’Abbazia
di S. Michele Arcangelo di Montescaglioso (Matera).
Febbraio 2017 Partecipa ad un’esposizione di pittura “La Natura Morta” presso
l’Abbazia di S. Michele Arcangelo di Montescaglioso (MT).
Dal 2018 fa parte dell’Associazione Incisori Grafica Di Via Sette Dolori di Matera
con i maestri Vittorio Manno e Angelo Rizzelli.
Gennaio 2019 partecipa all’esposizione del “Calendario Degli Incisori Di Matera
2019” presso la “Grafica di Via Sette Dolori” di Matera (MT).
Marzo 2019 partecipa al Corso Intensivo “Libro D’Artista e Caratteri Mobili” diretto
dal maestro Alfredo Bartolomeoli presso la “Grafica di Via Sette Dolori” di Matera
(MT).
Ottobre 2019 è tra i selezionati per il XXXIII Premio Fibrenus “Carnello Carte ad
Arte” XVI edizione (500anni) a Sora (FR).
Dicembre 2019 partecipa all’esposizione del “Festival Internazionale del libro
d’artista inciso” presso il Distretto del mobile imbottito a Matera.
Dicembre 2021 in occasione della 17ma giornata del contemporaneo, espone tre
incisioni a “La grafica si mostra” presso il “Distretto del mobile imbottito” a Matera
(MT).
Giugno 2022 è tra i selezionati al “XV Premio Acqui-Mostra Internazionale Biennale
per l’incisione” ad Acqui Terme, Alessandria (AL).

Curriculum Artistico di Giacomo Dimichino
giacomo.dimichino@gmail.com
Ottobre 2022 in occasione della 18ma giornata mondiale del contemporaneo
espone 6 incisioni presso la “galleria Domus.Mad Art” e altre 2 incisioni presso il
“Distretto del mobile imbottito” a Matera</p>
          </Col>
          </Row>
          </Container>
          </div>
        );
      };
   

     


      



    
   


export default Home
