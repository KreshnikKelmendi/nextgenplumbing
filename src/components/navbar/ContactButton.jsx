import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For demonstration, we're just logging the form data
    console.log('Form submitted!');
    handleClose(); 
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{ background: '#ff0000', border: 'none' }}>
        Get Started
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.873)', color: 'white', fontWeight: '600', paddingTop: '20px' }}>
          <Container>
            {/* Contact Information Section */}
            <Row className="my-3">
              <Col>
                <p><i className="fas fa-phone"></i> +1234567890</p>
                <p><i className="fas fa-map-marker-alt"></i> 123 Main St, City, Country</p>
                <p>
                  <a href="https://instagram.com" className="social-link text-white"><i className="fab fa-instagram"></i></a>
                  <a href="https://facebook.com" className="social-link ms-3 text-white"><i className="fab fa-facebook"></i></a>
                </p>
              </Col>
            </Row>

            {/* Form Section */}
            <Row className="mb-3">
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email address" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Your Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                  </Form.Group>

                  <div className="text-end">
                    <Button variant="primary" type="submit" style={{ background: '#ff0000', border: 'none' }}>
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactButton;
