import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/jack-logo.jpeg"
import {Link, NavLink} from "react-router-dom";

function ColorSchemesExample() {
  const path= window.location.pathname
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img className="" width={50} height={50}
            src={logo} />
            
          </Navbar.Brand>
          <Nav className="me-auto">
            
            
            <Nav.Link to="/">Home</Nav.Link>
            
           
            <Nav.Link to="/opere">Opere</Nav.Link>
            
            
            <Nav.Link to="/contact">Contact</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      
      

      
    </>
  );
}



export default ColorSchemesExample;