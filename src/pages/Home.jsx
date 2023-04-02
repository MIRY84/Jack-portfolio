import React from 'react'
import jack from "../images/jackyprofile.jpg";
import Carousel from 'better-react-carousel';
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

       
     <div>
    
    <Carousel  cols={4} rows={1} gap={10} >
      <Carousel.Item>
        <img width="100%" src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={item2} />
       
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={item6} />
        
        
      </Carousel.Item>
      <Carousel.Item>
      
        <img width="100%" src={item10} />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={item11} />
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src={item9} />
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    
    </div>
    </div>
       
      
  
  )
}

export default Home
