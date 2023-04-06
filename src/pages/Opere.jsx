import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import item1 from "../images/favorites/Medusa.jpg";
import item2 from "../images/favorites/Orca.jpg";
import item3 from "../images/favorites/orca2.jpg";
import item4 from "../images/favorites/Octopus.jpg";
import item5 from "../images/favorites/Octopustampsec.jpg";
import item6 from "../images/favorites/Octopus-final.jpg";
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
import item18 from "../images/favorites/mareintempesta.jpg";
import item19 from "../images/favorites/Ara Macao.jpg";
import item20 from "../images/favorites/libroartista.jpg";
import item21 from "../images/favorites/Attrazione sferica.jpg";
import item22 from "../images/favorites/peacock1.jpg";
import item23 from "../images/favorites/Peacock.jpg";
import item24 from "../images/favorites/The eye of God.jpg";
import item25 from "../images/favorites/argopanoptes.jpg";
import item26 from "../images/favorites/axolotl.jpg";
import item27 from "../images/favorites/iltutto.jpg";
import item28 from "../images/favorites/iltutto2.jpg";
import item29 from "../images/favorites/Capitale europea della cultura 2019.jpg";
import item30 from "../images/favorites/Dai gradoni di Sant'Antonio.jpg";
import { Container, Row, Col } from 'react-bootstrap';

function Carouselcomp() {


  return (

    <Container className="fluid">
      <Row>
        <Col sm={12}>
          <h1 className="text-center">Le mie opere</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide >
              <img className="opere" src={item1} />
              <div className="slide-title text-center">MEDUSA</div>

            </SwiperSlide>

            <SwiperSlide>
              <img className="opere" src={item3} />
              <div className="slide-title text-center">ORCA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item4} />
              <div className="slide-title text-center">OCTOPUS</div>
              <div>
                <p>Tecnica: Linoleografia<br />
                  Il polpo Cerca la propria sicurezza cambiando colore, si mimetizza, cambia forma, si nasconde, scurisce l’acqua intorno a se e scappa veloce come una freccia.<br />
                  Sono incredibilmente scaltri nel camuffamento. A differenza di altri animali marini dotati di abilità mimetica, i polpi non provano ad assumere i colori dell’intero habitat che li circonda (sabbia, alghe, coralli) ma scelgono un oggetto preciso (per esempio una conchiglia) e si mettono in posa per assomigliargli.<br />
                  Sono talmente bravi nel mimetizzarsi che anche la consistenza della loro pelle può variare a scopi mimetici, possono imitare pesci velenosi e serpenti marini.</p></div>

            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item5} />
              <div className="slide-title text-center">OCTOPUS/Stampa A Secco</div>
              <div>
                <p>Tecnica: Linoleografia<br />
                  Il polpo Cerca la propria sicurezza cambiando colore, si mimetizza, cambia forma, si nasconde, scurisce l’acqua intorno a se e scappa veloce come una freccia.<br />
                  Sono incredibilmente scaltri nel camuffamento. A differenza di altri animali marini dotati di abilità mimetica, i polpi non provano ad assumere i colori dell’intero habitat che li circonda (sabbia, alghe, coralli) ma scelgono un oggetto preciso (per esempio una conchiglia) e si mettono in posa per assomigliargli.<br />
                  Sono talmente bravi nel mimetizzarsi che anche la consistenza della loro pelle può variare a scopi mimetici, possono imitare pesci velenosi e serpenti marini.</p></div>

            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item6} />
              <div className="slide-title text-center">OCTOPUS</div>
              <div>
                <p>Tecnica: Linoleografia<br />
                  Il polpo Cerca la propria sicurezza cambiando colore, si mimetizza, cambia forma, si nasconde, scurisce l’acqua intorno a se e scappa veloce come una freccia.<br />
                  Sono incredibilmente scaltri nel camuffamento. A differenza di altri animali marini dotati di abilità mimetica, i polpi non provano ad assumere i colori dell’intero habitat che li circonda (sabbia, alghe, coralli) ma scelgono un oggetto preciso (per esempio una conchiglia) e si mettono in posa per assomigliargli.<br />
                  Sono talmente bravi nel mimetizzarsi che anche la consistenza della loro pelle può variare a scopi mimetici, possono imitare pesci velenosi e serpenti marini.</p></div>

            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item7} />
              <div className="slide-title text-center">I TRE ARCHI</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item8} />
              <div className="slide-title text-center">SPIRALI</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item9} />
              <div className="slide-title text-center">PANDA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item10} />
              <div className="slide-title text-center">MANTA RAYA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item11} />
              <div className="slide-title text-center">CIVETTA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item12} />
              <div className="slide-title text-center">NAUTILUS</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item14} />
              <div className="slide-title text-center">IL CANTO DELLO SMERALDINO</div>
              <div>
                <p>Tecnica: Maniera zucchero, acquatinta e rotella<br />
                  Dimensioni: 180 x 300 mm<br />
                  Anno: 2020<br />
                  IL ROSPO è forse l’animale più nostalgico e fedele perché in età adulta, torna alla pozza dove ha vissuto la giovinezza di girino per cercare la propria compagna.<br />
                  Sono animali che subiscono una metamorfosi, nascono come animaletti, simili a pesci per caratteristiche fisiche e morfologiche, per poi trasformarsi in creature dotate di zampe e polmoni.<br />
                  Gli anfibi sono infatti animali dalla “doppia vita”, perché sospesi fra gli ambienti acquatici e quelli terrestri.<br />
                  È però nell’acqua dello stagno che nasce il potente canto d’amore degli smeraldini, quando la primavera ancora dorme risuona nel crepuscolo serale, creando uno spettacolo musicale, inno alla vita dopo mesi di letargo invernale.</p></div>

            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item15} />
              <div className="slide-title text-center">HIPPOCAMPUS</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item16} />
              <div className="slide-title text-center">EX LIBRIS JORDAN PETKOV</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item17} />
              <div className="slide-title text-center">MARE IN TEMPESTA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item18} />
              <div className="slide-title text-center">MARE IN TEMPESTA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item19} />
              <div className="slide-title text-center">ARA MACAO</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item20} />
              <div className="slide-title text-center">LIBRO D'ARTISTA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item21} />
              <div className="slide-title text-center">ATTRAZIONE SFERICA</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item22} />
              <div className="slide-title text-center">PEACOCK</div>
              <div>
                <p>Tecnica: Carborundum, resina e puntasecca su acetato<br />
                  Anno: 2022<br />
                  Secondo la mitologia greca Argo Panoptes era un gigante con cento occhi, il cui nome Panoptes significava “quello che vede tutto”; per questo fu posto da Era come guardiano della ninfa IO affinché Zeus non si avvicinasse a ella.<br /> Zeus, per liberare Io, mandò il Dio Ermes che camuffatosi da pastore, si avvicinò ad Argo suonando una melodia fino a che non riuscì a far chiudere tutti i cento occhi. <br />Ermes uccise il gigante addormentato tagliandogli la testa con la spada, liberando Io. <br />Era prese gli occhi dalla testa di Argo e li pose sulle piume del pavone, l'animale a lei sacro.</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item23} />
              <div className="slide-title text-center">PEACOCK</div>
              <div>
                <p>Tecnica: Carborundum, resina e puntasecca su acetato<br />
                  Anno: 2022<br />
                  Secondo la mitologia greca Argo Panoptes era un gigante con cento occhi, il cui nome Panoptes significava “quello che vede tutto”; per questo fu posto da Era come guardiano della ninfa IO affinché Zeus non si avvicinasse a ella.<br /> Zeus, per liberare Io, mandò il Dio Ermes che camuffatosi da pastore, si avvicinò ad Argo suonando una melodia fino a che non riuscì a far chiudere tutti i cento occhi. <br />Ermes uccise il gigante addormentato tagliandogli la testa con la spada, liberando Io. <br />Era prese gli occhi dalla testa di Argo e li pose sulle piume del pavone, l'animale a lei sacro.</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item24} />
              <div className="slide-title text-center">THE EYE OF GOD</div>
              <div>
                <p>Tecnica: Carborundum, resina e puntasecca su acetato<br />
                  Anno: 2022<br />
                  Secondo la mitologia greca Argo Panoptes era un gigante con cento occhi, il cui nome Panoptes significava “quello che vede tutto”; per questo fu posto da Era come guardiano della ninfa IO affinché Zeus non si avvicinasse a ella.<br /> Zeus, per liberare Io, mandò il Dio Ermes che camuffatosi da pastore, si avvicinò ad Argo suonando una melodia fino a che non riuscì a far chiudere tutti i cento occhi. <br />Ermes uccise il gigante addormentato tagliandogli la testa con la spada, liberando Io. <br />Era prese gli occhi dalla testa di Argo e li pose sulle piume del pavone, l'animale a lei sacro.</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item25} />
              <div className="slide-title text-center">ARGO PANOPTES</div>
              <div>
                <p>Tecnica: Carborundum, resina e puntasecca su acetato<br />
                  Anno: 2022<br />
                  Secondo la mitologia greca Argo Panoptes era un gigante con cento occhi, il cui nome Panoptes significava “quello che vede tutto”; per questo fu posto da Era come guardiano della ninfa IO affinché Zeus non si avvicinasse a ella.<br /> Zeus, per liberare Io, mandò il Dio Ermes che camuffatosi da pastore, si avvicinò ad Argo suonando una melodia fino a che non riuscì a far chiudere tutti i cento occhi. <br />Ermes uccise il gigante addormentato tagliandogli la testa con la spada, liberando Io. <br />Era prese gli occhi dalla testa di Argo e li pose sulle piume del pavone, l'animale a lei sacro.</p>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item26} />
              <div className="slide-title text-center">AXOLOTL</div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item27} />
              <div className="slide-title text-center">COME TUTTO EBBE INIZIO/NASCITA</div>
              <div>
                <p>Tecnica: acquaforte, acquatinta, puntasecca.<br />
                  Dimensione matrice: 300x400<br />
                  Anno esecuzione:2020<br />
                  "TRA L' OSCURITÀ DELLA NOTTE E LA LUCE DEL GIORNO SI MANIFESTA, DAI RAGGI TENEBROSI, UNA PRIMA FORMA REMOTA VITALE, È LA CELLULA RADIALE (Actinomma antarctica), CENTRO DELL'ESISTENZA. LA VENATURA CARDIACA, CHE OLTREPASSA I TRIANGOLI OPPOSTI, SOTTOLINEA COME IL PRIMO BATTITO DEL CUORE È IL PRIMO RICHIAMO ALLA VITA NONCHÉ PRIMO SUONO ASCOLTATO DA UN BAMBINO NEL GREMBO DI SUA MADRE NEL SUO STATO EMBRIONALE. <br />
                  IN BILICO TRA LA MORTE E LA VITA SI CONTRAPPONE UN FASCIO DI LUCE, DI SPERANZA, CHE AVANZA PREPOTENTEMENTE SOPRA OGNI COSA.<br />
                  PICCOLI FRAMMENTI RIFLETTONO IL CONFLITTO INTERIORE DELL'ANIMA."</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item28} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item29} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opere" src={item30} />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}


export default Carouselcomp;