import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';




const Footer = () => {
  return (
    <div id="about" className= "footer text-center">
     <div className='icons-footer'>
        <a href='http://www.instagram.com/giacomo_dimichino/'role="button" className="btn btn-link" >
         <FaInstagram style = {{ color: "black",fontSize: "2.5em" }} />
          </a>
          <a href='http://www.facebook.com/giacomodimichinoart'role="button" className="btn btn-link" >
        <FaFacebook style = {{ color: "black", fontSize: "2.5em" }}/>
        </a>
        <a href='mailto:giacomodimichinoartist@gmail.com/' role="button" className="btn btn-link" >
          
        <AiTwotoneMail style = {{ color: "black", fontSize: "2.5em" }} />
        </a>
     </div>
     <h4> &copy; 2023 All rights reserved</h4> 
     </div>
  );
}

export default Footer;
