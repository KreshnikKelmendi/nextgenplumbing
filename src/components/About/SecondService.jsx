import React from 'react';
import plumberImage from '../../images/properties/plumber-5.jpg'; // Replace with your image file path
import { Container, Row, Col } from 'react-bootstrap';
import AnimationTitles from '../functions/AnimationTitles';

const SecondService = () => {
  return (
    <div className="service-section bg-water-plumbing d-flex align-items-stretch" style={{ minHeight: '100vh' }}>
      <Container className="d-flex align-items-center">
        <Row className="align-items-center">
          <Col md={6}>
            <img 
              src={plumberImage} 
              alt="Plumber" 
              className="img-fluid firstServiceImage"
              style={{ 
                height: '100vh', 
                objectFit: 'cover',
                maxHeight: '500px' // Limit maximum height for smaller screens
              }}
            />
          </Col>
          <Col md={6}>
            <div className="service-content">
              <AnimationTitles
                title="Expert Services"/>
              <p>
                The Pink Plumber started in 1995 with the goal of offering our customers some of the best plumbing services around. From that moment, we’ve been so confident in our work that we backed it with a <strong>100% Satisfaction Guarantee*</strong> for a year.
              </p>
              <ul className="service-list">
                <li><i className="fas fa-check-circle"></i> 100% Satisfaction Guaranteed*</li>
                <li><i className="fas fa-check-circle"></i> Fast Response</li>
                <li><i className="fas fa-check-circle"></i> Licensed, Bonded, & Insured</li>
                <li><i className="fas fa-check-circle"></i> ACE Certified Technicians</li>
                <div class="water-loader"></div>
              </ul>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecondService;


