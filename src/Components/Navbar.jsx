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
        </Container>
      </Navbar>
      
      

      
    </>
  );
}



export default ColorSchemesExample;