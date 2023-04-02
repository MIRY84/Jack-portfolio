import React from 'react'

import { Carousel } from 'react-carousel-card-3d';


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
      <div style={{ width: 600, height: "100vh" }}>
        <Carousel3d
          cards={[
            {
              key: 1,
              content: <CarouselCard title="War Paradise" image={item5} />,
            },
            {
              key: 2,
              content: <CarouselCard title="Town Star" image={item2} />,
            },
            {
              key: 3,
              content: (
                <CarouselCard title="Defense Heroes" image={item3} />
              ),
            },
          ]}
          offset={2}
        />
      </div>
    </div>
 

     


      



    
   



  )
}

export default Home
