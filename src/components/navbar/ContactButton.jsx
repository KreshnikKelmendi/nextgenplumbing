import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';

function ContactButton() {
  const [show, setShow] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [userName, setUserName] = useState(''); // Store user's full name

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data using name attributes
    const formData = {
      fullName: event.target.elements.fullName.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      message: event.target.elements.message.value,
    };

    // Set user's name to show in the popup
    setUserName(formData.fullName);

    // Send email via EmailJS
    emailjs.send('service_p5n4ac6', 'template_j7pv9nj', formData, '_ZHziVHr0gyHi4XTr')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        event.target.reset(); // Reset the form fields after submission
        handleClose(); // Close the form modal
        setPopupVisible(true); // Show the thank you popup

        // Automatically close popup after 3000ms
        setTimeout(() => {
          setPopupVisible(false);
        }, 3000);
      }, (err) => {
        console.log('FAILED...', err);
        alert('There was an issue submitting the form. Please try again.');
      });
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{ background: '#ff0000', border: 'none' }}>
        Get Started
      </Button>

      {/* Contact Form Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.873)', color: 'white', fontWeight: '600', paddingTop: '20px' }}>
          <Container>
            {/* Contact Information Section */}
            <Row className="my-3">
              <Col>
                <p><i className="fas fa-phone"></i> + 1 701 970 9860</p>
                <p><i className="fas fa-map-marker-alt"></i> 623 22nd Street E., West Fargo ND 58078</p>
                <p>
                  <a href="https://www.instagram.com/ndnextgen" target='_blank' rel="noreferrer" className="social-link text-white"><i className="fab fa-instagram"></i></a>
                  <a href="https://facebook.com" className="social-link ms-3 text-white"><i className="fab fa-facebook"></i></a>
                </p>
              </Col>
            </Row>

            {/* Form Section */}
            <Row className="mb-3">
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Enter your full name" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email address" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Phone Number</Form.Label>
                    <Form.Control type="tel" name="phone" placeholder="Enter your phone number" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your message" required />
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

      {/* Redesigned Pop-up Modal (Thank You Message) */}
      {popupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <div className="popup-header">
              <span className="popup-icon">🎉</span>
              <h2>Thank You, {userName}!</h2>
            </div>
            <p>We have received your message and will get back to you shortly.</p>
            <div className="popup-progress"></div>
          </div>
        </div>
      )}

      {/* Styles for Pop-up Modal */}
      <style jsx>{`
        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1050;
        }

        .popup-content {
          background-color: white;
          color: #333;
          padding: 20px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.5s ease-in-out;
          width: 100%;
          max-width: 400px;
        }

        .popup-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .popup-icon {
          font-size: 2.5rem;
          color: #ff0000;
        }

        .popup-content h2 {
          font-size: 1.8rem;
          color: #ff0000;
        }

        .popup-content p {
          font-size: 1rem;
          color: #555;
        }

        .popup-progress {
          margin-top: 15px;
          height: 5px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .popup-progress::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 0;
          background-color: #ff0000;
          animation: progress 3s linear forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </>
  );
}

export default ContactButton;
