import "./header.css";
import logo from "../../assets/logo.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {

  return ( 
      <Navbar className="header" expand="lg">
        <Container fluid >
          <NavLink to="/" className="col">
            <img src={logo} alt="instafiesta-logo" />
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "#fdc200" }}
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto navlinks">
            <li className="nav-link">Home</li>
          <li className="nav-link">Portfolio</li>
          <li className="nav-link">About us</li>
          <li className="nav-link">Our Service</li>
            </Nav>
            <div>
            <button className="linear-btn py-2">Get Started</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
