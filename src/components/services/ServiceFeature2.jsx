import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image7 from '../../images/properties/plumber-r2.jpg';

const ServiceFeature2 = () => {
  return (
    <>
      <div style={{ color: 'white', padding: '3rem 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                We Work Closely with Our Clients
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Tristate Plumbing takes on over 400 construction projects each year.
                We handle each project individually and with unique care. Every construction
                project begins with our estimating team working with clients to envision
                their project clearly in order to minimize costs. The estimating phase is
                crucial to ensure a smooth transition from bidding to building. We work
                closely with clients to transition smoothly from estimating to construction.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <Image
                src={image7}
                style={{ width: '80%', borderRadius: '0.25rem', boxShadow: '40px 40px 8px #ff0000' }}
                alt="Plumber at work"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ color: 'white', padding: '3rem 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <Image
                src={image7}
                style={{ width: '80%', borderRadius: '0.25rem', boxShadow: '40px 40px 8px #000e5d' }}
                alt="Plumber at work"
                fluid
              />
            </Col>
            <Col md={6} className="mb-4 mb-md-0">
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Expertise
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Every construction team member is a plumbing and sprinkler expert. Our knowledge of plumbing and fire suppression code is unrivaled. We are familiar with different types of plumbing and sprinkler design systems in government institutions, commercial properties, hospitals, laboratories, and residential high-rise properties.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ServiceFeature2;
