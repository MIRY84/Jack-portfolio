import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
      
      // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




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


      <h2 >"L'arte e' addirittura piu' bella della realta' che con il tempo svanisce."
        Leonardo Da Vinci</h2>
      <img src={jack} width={400} height={300} />
     

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <img width={200} height={200}
               src={item1} />
               </SwiperSlide>
            <SwiperSlide>
            <img width={200} height={200}
               src={item2} />
              Spirali</SwiperSlide>
            <SwiperSlide><img width={200} height={200}
               src={item3} /></SwiperSlide>
            <SwiperSlide><img width={200} height={200}
               src={item4} /></SwiperSlide>
            ...
          </Swiper>
          </div>
        );
      };
   

     


      



    
   


export default Home
