import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';




const Footer = () => {
  return (
    <div id="about" className= "footer text-center">
     <div>
        <a href='http://www.instagram.com/giacomo_dimichino/'role="button" className="btn btn-link" >
         <FaInstagram />
          </a>
          <a href='http://www.facebook.com/giacomodimichinoart'role="button" className="btn btn-link" >
        <FaFacebook />
        </a>
        <a href='mailto:giacomo.dimichino@gmail.com' role="button" className="btn btn-link" >
        <AiTwotoneMail />
        </a>
     </div>
     <p> &copy; 2023 All rights reserved</p> 
     </div>
  );
}

export default Footer;
