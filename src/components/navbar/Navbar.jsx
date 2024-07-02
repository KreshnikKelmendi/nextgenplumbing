import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/next-gen.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
     <div className="phone-banner text-white py-3">
  <Container className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center">
      <i className="fas fa-phone-alt me-2"></i>
      <p className="mb-0">Call us at: <strong>+1 234 567 890</strong></p>
    </div>
    <div className="d-flex align-items-center">
      <p className="mb-0 me-3">Follow us:</p>
      <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="fab fa-instagram cursor-pointer"></i>
      </a>
      <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  </Container>
</div>




      {/* Navigation bar */}
      <Navbar expand="lg" className="py-2 bg-white navbar-header sticky-top">
        <Container>
          <Navbar.Brand href="#" className="me-lg-5">
            <img
              className="logo"
              style={{ width: "150px", height: "auto", objectFit: "contain" }}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLink to="/"  className="text-black fw-bold">Home</NavLink>
              <NavLink to="/about" className="text-black fw-bold">About Us</NavLink>
              <NavLink to="/services" className="text-black fw-bold">Services</NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center order">
            <Button
              variant="primary"
              className="d-none d-lg-inline-block"
              style={{ backgroundColor: "#ff0000", border: "none" }}
            >
              Contact
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
