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
            <NavLink to="/" className={({ isActive}) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
            to="/opere" className={({ isActive}) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Opere
            </NavLink>     
            <a className='nav-link' onClick={() => window.location.replace("#about")}>Contato</a> 
          </Nav>
        </Container>
      </Navbar>
      
      

      
    </>
  );
}



export default ColorSchemesExample;