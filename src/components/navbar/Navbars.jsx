import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/Image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Navbars = () => {
  const icons = <FontAwesomeIcon icon={faChevronRight} />;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="active" href="#home">
              Home
            </Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Other Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Login / Register
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Service Details
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>Contact Us</Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link className="tel">
              <FontAwesomeIcon icon={faPhone} className="phone" /> (+01)999 888
              777
            </Nav.Link>
            <Nav.Link>
              <button>Contact Us {icons}</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
