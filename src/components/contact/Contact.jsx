import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Container className="my-5 text-white">
      <Row className="justify-content-center">
        <Col xs={12} md={12}>
          <div className='d-lg-flex'>
            <Col md={6}>
              <h2>Contact Us</h2>
              <div style={{ marginTop: '21px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faPhone} size="2x" style={{ marginBottom: '10px', color: '#555' }} />
                  <p style={{ margin: 0, fontSize: '1.2em', color: 'white' }}>(123) 456-7890</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ marginBottom: '10px', color: '#555' }} />
                  <p style={{ margin: 0, fontSize: '1.2em', color: 'white' }}>email@example.com</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{ marginBottom: '10px', color: '#555' }} />
                  <p style={{ margin: 0, fontSize: '1.2em', color: 'white' }}>123 Main St, Anytown, USA</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.9537353154094!3d-37.81720974201071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f760981f0f01!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1631361120934!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className='rounded'
              ></iframe>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
