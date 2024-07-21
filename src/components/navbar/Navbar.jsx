import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/next-gen.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import ContactButton from "./ContactButton";

function NavBar() {
  return (
    <>

<div className="phone-banner text-white py-3 ">
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
      <Navbar expand="lg" className="py-2 py-lg-3 py-xxl-4 bg-white navbar-header sticky-top">
        <Container >
          <Navbar.Brand href="/" className="me-lg-5">
            <img
              className="logo"
              style={{ width: "150px", height: "auto", objectFit: "contain" }}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="nav-link text-black px-3 fw-bold">Home</NavLink>
              <NavLink to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="nav-link text-black px-3 fw-bold">About Us</NavLink>
              <NavLink to="/services" className="nav-link text-black px-3 fw-bold">Services</NavLink>
              <NavLink to="/contact" className="nav-link text-black px-3 fw-bold">Contact</NavLink>

            </Nav>
            <ContactButton />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
