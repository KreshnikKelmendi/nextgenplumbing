import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <section className='mb-5 bg-light py-5'>
      <Container className="py-5 rounded" style={{backgroundColor: "rgba(0, 0, 0, 0.873)"}}>
        <Row className="align-items-center px-3">
          <Col lg={6} className="text-center text-lg-left">
            <h2 className="text-white">Get Started with Our Services</h2>
            <p className="text-white">Contact us to know more about our offerings and how we can help you.</p>
          </Col>
          <Col lg={6} className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0">
            <Button variant='secondary' style={{backgroundColor:"#ff0000", border:"none"}} href="+1 701 970 9860" size="lg" title='Call Us +1 701 970 9860'>
              Call Us: +1 701 970 9860
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
