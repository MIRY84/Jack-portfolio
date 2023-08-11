import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/jack-logo.jpeg"
import {Link, NavLink} from "react-router-dom";
import { useState } from 'react';



function ColorSchemesExample() {
  const path= window.location.pathname
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };
  return (
    <>
      <Navbar expanded={expanded} expand="md" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand>
            <img className="" width={50} height={50}
            src={logo} />            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavItemClick} className={({ isActive}) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
             <p style = {{ fontSize: "1.5em" }}>Home </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/opere" onClick={handleNavItemClick}
             className={({ isActive}) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
             <p style = {{ fontSize: "1.5em" }}> Opere </p>
            </Nav.Link>     
            <button className='nav-link btn btn-link'  onClick={() => window.location.replace("#about")}>
            <p style = {{ fontSize: "1.5em" }}>Contact </p>
            </button> 
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      

      
    </>
  );
}



export default ColorSchemesExample;