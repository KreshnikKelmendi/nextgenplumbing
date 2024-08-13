import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import visionImage from "../../images/properties/plumbing-r4.jpg";

const App = () => {
  return (
    <div className='bg-light' style={{ color: 'black', paddingTop:"80px", paddingBottom:"40px", minHeight: '' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-4">
            <div className='py-3 px-3 text-white rounded' style={{ backgroundColor: "#ff0000", minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2>Our Vision</h2>
              <p>We believe in building strong relationships and delivering results that exceed expectations. Whether you're embarking on a new construction project, managing a multi-family property, or simply need reliable service for your home or business, we are here to make your vision a reality.</p>
            </div>
          </Col>
          <Col lg={6} xs={12} className="mb-4">
            <img className='rounded' src={visionImage} alt="Vision" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
          </Col>
         
          <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2 className="col-12 col-lg-6">Our goal is to ensure your complete satisfaction through:</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Expertise and Precision</Card.Title>
              <Card.Text>
                With years of experience, our skilled team is equipped to handle diverse plumbing needs with professionalism and efficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Collaborative Approach</Card.Title>
              <Card.Text>
                We work hand-in-hand with clients and contractors to understand your needs, manage your budget, and adhere to your timeline.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Uncompromising Quality</Card.Title>
              <Card.Text>
                From installation to maintenance, we deliver top-notch service and craftsmanship in every job we undertake.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Safety</Card.Title>
              <Card.Text>
                We prioritize the safety of our team, clients, and work sites by adhering to the highest safety standards and practices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
