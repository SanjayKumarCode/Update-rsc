import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu} from 'react-icons/gi';
import snfile from "./navbar2.module.css";
function Navbar2() {
  return (
    
<div className={snfile.top123}>
    <div className={snfile.top}>
    <Navbar bg="light" expand="lg">
       <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title=<GiHamburgerMenu size={30}/> id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Back to home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Sign Up
              </NavDropdown.Item>
            </NavDropdown>
         
          <button className={snfile.btn321}>
          <BsPersonCircle size={40}  />
          <NavDropdown title="Nishchal Anand" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Welcome</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  );
}

export default Navbar2;