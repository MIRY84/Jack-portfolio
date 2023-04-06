import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';




const Footer = () => {
  return (
    <div className= "footer text-center">
     <div>
      <h2 id="about">Contact Me</h2>
        <a href='http://www.instagram.com/giacomo_dimichino/'role="button" className="btn btn-link" >
         <FaInstagram />
          </a>
          <a href='http://www.facebook.com/profile.php?id=1000636288054'role="button" className="btn btn-link" >
        <FaFacebook />
        </a>
     </div>
     <p> &copy; 2023 All rights reserved</p>
     </div>
  );
}

export default Footer;
