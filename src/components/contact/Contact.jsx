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
                  <p style={{ margin: 0, fontSize: '1.2em', color: 'white' }}>+ 1 701 970 9860</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ marginBottom: '10px', color: '#555' }} />
                  <p style={{ margin: 0, fontSize: '1.2em', color: 'white' }}>fjavori@ndnextgen.com</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{ marginBottom: '10px', color: '#555' }} />
                  <p style={{ margin: 0, fontSize: '1.2em', color: 'white' }}>623 22nd Street E., West Fargo ND 58078</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.6754883529893!2d-96.86818552319166!3d46.86975823856839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c8cb40fdbe5ced%3A0xb236ffff0ccfe79c!2s623%2022nd%20St%20E%2C%20West%20Fargo%2C%20ND%2058078%2C%20USA!5e0!3m2!1sen!2s!4v1726133770309!5m2!1sen!2s" 
              width="100%"
              title="Our Locations"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className='rounded'></iframe>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
