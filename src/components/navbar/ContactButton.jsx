import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ContactButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="get-started-btn" onClick={handleShow}>
        Get Started
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="get-started-offcanvas"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Get in Touch</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="get-started-intro">
            Reach out anytime. We are happy to answer questions and schedule your next visit.
          </p>

          <a href="tel:+17017398040" className="contact-card">
            <span className="contact-card-icon">
              <i className="fas fa-phone-alt"></i>
            </span>
            <span className="contact-card-copy">
              <span className="contact-card-label">Phone</span>
              <span className="contact-card-value">+1 701 739 8040</span>
            </span>
          </a>

          <a href="mailto:ndnextgen@outlook.com" className="contact-card">
            <span className="contact-card-icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="contact-card-copy">
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">ndnextgen@outlook.com</span>
            </span>
          </a>

          <div className="contact-card contact-card-static">
            <span className="contact-card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="contact-card-copy">
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">623 22nd Street E., West Fargo ND 58078</span>
            </span>
          </div>

          <a
            href="https://www.instagram.com/ndnextgen"
            target="_blank"
            rel="noreferrer"
            className="instagram-card"
          >
            <span className="instagram-card-icon">
              <i className="fab fa-instagram"></i>
            </span>
            <span className="instagram-card-copy">
              <span className="instagram-card-label">Follow us on Instagram</span>
              <span className="instagram-card-value">@ndnextgen</span>
            </span>
            <i className="fas fa-arrow-right instagram-card-arrow"></i>
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactButton;
