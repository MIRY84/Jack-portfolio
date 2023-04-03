
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
          </Container>
          </div>
        );
      };
   

     


      



    
   


export default Home
