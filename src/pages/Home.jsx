
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";





// import required modules
import { EffectCoverflow, Pagination } from "swiper";




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







const Home = () => {
  return (
    <div>

      <section>
      <h2 >"L'arte e' addirittura piu' bella della realta' che con il tempo svanisce."
        Leonardo Da Vinci</h2>
        <img width={400} src={jack} />
        </section>
      
     
         <section>
          <Swiper 
            // install Swiper modules
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              
             
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            breakpoints={{
              350:{
                slidesPerView:1,
                spaceBetween:10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            
            className="mySwiper"
          >
          
            <SwiperSlide>
              <img 
               src={item1} />
               </SwiperSlide>
            <SwiperSlide>
            <img 
               src={item2} />
              Spirali</SwiperSlide>
            <SwiperSlide><img 
               src={item3} /></SwiperSlide>
            <SwiperSlide><img 
               src={item4} /></SwiperSlide>
              <SwiperSlide>
              <img 
               src={item1} />
               </SwiperSlide>
               <SwiperSlide>
              <img 
               src={item1} />
               </SwiperSlide>
            ...
          </Swiper>
          </section>
          </div>
        );
      };
   

     


      



    
   


export default Home
