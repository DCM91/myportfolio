import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';




export const CanvassNav = () => {
  return (
    <NavBarStyle>
    <div>
      <Navbar key="md" bg="dark" variant="dark" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#"><h3>Daniel Castro Martín</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas 
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <h3>Daniel Castro Martín</h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" >
              <Nav.Link href="#action1"><p>Home Page<AiOutlineHome className="icon"/></p></Nav.Link>

                <NavDropdown
                  title="About Me"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action20"> About Me</NavDropdown.Item>

                  
                  <NavDropdown.Item href="#action3">Skills</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Hobbies</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    All my DevWorks here! :)
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2"><p>Contact<AiOutlineUser className="icon"/></p></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
    </NavBarStyle>
  );
}

const NavBarStyle= styled.div`
position: absolute;
margin: .1rem .3rem;
z-index: 100;


.mb-3 {
  position: fixed;
  width: 101%;
  background-color: #686461;
  padding-left: 2rem;
  padding: .3rem;
  margin: 0;
  margin-left: -.4rem;
  margin-top: -0.2rem;
  height: 4rem;
  z-index: 1;
}
.icon{
  padding-left: .3rem;
  font-size: larger;
  padding-bottom: .2rem;

}
.nav-link{
  
  font-size: larger;
  padding-top: 1.2rem;
  margin: 0;
}
h3{
    color: #f2f2f2;
    text-shadow: #000 0.1rem 0.1rem;
    font-family: 'Poppins', sans-serif;
  }

`