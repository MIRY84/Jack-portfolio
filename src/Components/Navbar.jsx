import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/jack-logo.jpeg"

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
            
            
            <Nav.Link href="/">Home</Nav.Link>
            
           
            <Nav.Link href="/opere">Opere</Nav.Link>
            
            
            <Nav.Link href="/contact">Contact</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      
      

      
    </>
  );
}



export default ColorSchemesExample;