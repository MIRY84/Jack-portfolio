import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';




const Footer = () => {
  return (
    <div className= "footer text-center">
     <div>
     
       
        <FaInstagram />
        <FaFacebook />
     </div>
     <p> &copy; 2023 All rights reserved</p>
     </div>
  );
}

export default Footer;
