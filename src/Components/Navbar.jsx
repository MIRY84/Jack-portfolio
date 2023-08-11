import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/jack-logo.jpeg"
import {Link, NavLink} from "react-router-dom";

const expandBreakpoint = "md";

function ColorSchemesExample() {
  const path= window.location.pathname
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand={expandBreakpoint}>
        <Container>
          <Navbar.Brand>
            <img className="" width={50} height={50}
            src={logo} />            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`mx-auto ms-${expandBreakpoint}-auto me-${expandBreakpoint}-0`}>
            <NavLink to="/" className={({ isActive}) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
             <p style = {{ fontSize: "1.5em" }}>Home </p>
            </NavLink>
            <NavLink
            to="/opere" className={({ isActive}) =>
              isActive ? 'nav-link active' : 'nav-link'
              }
            >
             <p style = {{ fontSize: "1.5em" }}> Opere </p>
            </NavLink>     
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