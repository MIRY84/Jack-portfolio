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
import { Container, Row, Col} from 'react-bootstrap';

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
          <img src={item1} />
          <div className="slide-title text-center">MEDUSA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item2} />
          <div className="slide-title text-center">ORCA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item3} />
          <div className="slide-title text-center">ORCA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item4} />
          <div className="slide-title text-center">OCTOPUS</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item5} />
          <div className="slide-title text-center">OCTOPUS:stampa a secco</div>
         
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item6} />
          <div className="slide-title text-center">OCTOPUS</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item7} />
          <div className="slide-title text-center">I tre archi</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item8} />
          <div className="slide-title text-center">SPIRALI</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item9} />
          <div className="slide-title text-center">PANDA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item10} />
          <div className="slide-title text-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item11} />
          <div className="slide-title text-center">CIVETTA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item12} />
          <div className="slide-title text-center">NAUTILUS</div>
        </SwiperSlide>
        
        <SwiperSlide>
         
          
          <img  src={item14} />
          <div className="slide-title text-center">CANTO SMERALDINO</div>
         
          
           
        </SwiperSlide>
        <SwiperSlide>
          <img src={item15} />
          <div className="slide-title text-center">HIPPOCAMPUS</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item16} />
          <div className="slide-title text-center">EX LIBRIS JORDAN PETKOV</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item17} />
          <div className="slide-title text-center">MARE IN TEMPESTA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item18} />
          <div className="slide-title text-center">MARE IN TEMPESTA</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item19} />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item20} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item21} />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item22} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item23} />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item24} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item25} />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item26} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item27} />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={item28} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item29} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item30} />
        </SwiperSlide>

      </Swiper>
      </Col>
      </Row>
      </Container>
      
  
  );
}


export default Carouselcomp;