import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo/next-gen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import ContactButton from "./ContactButton";

function NavBar() {
  return (
    <>
      <div className="phone-banner text-white py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="fas fa-phone-alt me-2"></i>
            <p className="mb-0">
              Call us at: <strong>+1 701 970 9860</strong>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0 me-3">Follow us:</p>
            <a
              href="https://www.instagram.com/ndnextgen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fab fa-instagram cursor-pointer"></i>
            </a>
            {/* <a
              href="https://www.facebook.com/your_facebook_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white ms-3"
            >
              <i className="fab fa-facebook"></i>
            </a> */}
          </div>
        </Container>
      </div>

      {/* Navigation bar */}
      <Navbar expand="lg" className="py-2 py-lg-3 py-xxl-4 bg-white navbar-header sticky-top">
        <Container>
          <Navbar.Brand href="/" className="me-lg-5">
            <img
              className="logo"
              style={{ width: "170px", height: "auto", objectFit: "contain" }}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 text-uppercase">
              <NavLink
                to="/"
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
                className="nav-link text-danger px-3 fw-bold"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
                className="nav-link text-danger px-3 fw-bold"
              >
                About Us
              </NavLink>
              <NavDropdown
                title="Services"
                id="services-dropdown"
                className="text-danger px-3 fw-bold"
              >
                <NavDropdown.Item as="div">
                  <NavLink
                    to="/services"
                    onClick={() => window.scrollTo({ top: 0, left: 0 })}
                    className="dropdown-item text-danger fw-bold"
                  >
                    All Services
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div">
                  <NavLink
                    to="/plumbing-services"
                    onClick={() => window.scrollTo({ top: 0, left: 0 })}
                    className="dropdown-item text-danger fw-bold"
                  >
                    PLUMBING SERVICES
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <NavLink
                    to="/radiant-heating"
                    onClick={() => window.scrollTo({ top: 0, left: 0 })}
                    className="dropdown-item text-danger fw-bold"
                  >
                    HYDRONIC SYSTEMS
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <NavLink
                    to="/gas-piping&testing-services"
                    onClick={() => window.scrollTo({ top: 0, left: 0 })}
                    className="dropdown-item text-danger fw-bold"
                  >
                    Gas Piping & Testing Services
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <NavLink
                    to="/water-heaters&water-treatment"
                    onClick={() => window.scrollTo({ top: 0, left: 0 })}
                    className="dropdown-item text-danger fw-bold"
                  >
                    Water Heaters and Water Treatment
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
                className="nav-link text-danger px-3 fw-bold"
              >
                Contact
              </NavLink>
            </Nav>
            <ContactButton />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
