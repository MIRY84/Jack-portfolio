import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('default_service', 'template_inkt0z9', form.current,{
        publicKey: 'HI7coCK2iAELRvH9f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    form.current.reset()
  }

  return (
    
    <Container className="fluid">
    <h2 className='text-center'>Per maggiori informazioni o richieste inviatemi un messaggio</h2>
    <Form ref={form} onSubmit={sendEmail}>
            <div className="row pt-5">
                <div className="col-8 form-group mx-auto ">
                    <input type="text" className="form-control" placeholder="Nome" name="user_name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="user_email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                
                    <input type="text" className="form-control" placeholder="Oggetto" name="subject"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 pb-5 mx-center mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
            </div>
        </Form>
    </Container>

)
}

export default Contact




