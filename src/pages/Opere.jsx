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
import item3 from "../images/favorites/Octopus.jpg";
import item4 from "../images/favorites/Octopustampsec.jpg";
import item5 from "../images/favorites/Octopus-final.jpg";
import item6 from "../images/favorites/itrearchi.jpg";
import item7 from "../images/favorites/Spirali.jpg";
import item8 from "../images/favorites/Panda.jpg";
import item9 from "../images/favorites/mantaraya.jpg";
import item10 from "../images/favorites/Civetta.jpg";
import item11 from "../images/favorites/iltutto.jpg";
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
        width={800}
        height={500}
        
       
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
        <SwiperSlide>
          <img  src={item1} />
          <div className="slide-captions text-center"><h3>Medusa</h3></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={item2} />
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
        <SwiperSlide>
          <img src={item7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item9} />
        </SwiperSlide>
      </Swiper>
      </Col>
      </Row>
      </Container>
      
  
  );
}


export default Carouselcomp;