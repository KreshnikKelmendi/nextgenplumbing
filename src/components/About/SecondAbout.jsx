import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import visionImage from "../../images/properties/plumbing-r4.jpg";

const App = () => {
  return (
    <div className='bg-light' style={{ color: 'black', paddingTop:"80px", paddingBottom:"40px", minHeight: '' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-4">
            <div className='py-3 px-3 text-white rounded' style={{ backgroundColor: "#ff0000", minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2>Our Vision</h2>
              <p>Our Vision at Nextgen Plumbing is to redefine reliability in plumbing solutions. We envision a future where every home and business enjoys seamless plumbing experiences, backed by innovative technology and exceptional service. With a commitment to sustainability and customer satisfaction, we strive to set new standards in the plumbing industry, ensuring efficiency and peace of mind for all our clients.</p>
            </div>
          </Col>
          <Col lg={6} xs={12} className="mb-4">
            <img className='rounded' src={visionImage} alt="Vision" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
          </Col>
          <Col lg={6} xs={12} className="mb-4">
            <img className='rounded' src={visionImage} alt="Mission" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
          </Col>
          <Col lg={6} className="mb-4">
            <div className='py-3 px-3 rounded' style={{ backgroundColor: "#000e5d", color: "white", minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2>Our Mission</h2>
              <p>At Nextgen Plumbing, our Mission is to deliver superior plumbing and underfloor heating services that exceed expectations. We dedicate ourselves to providing expert craftsmanship, utilizing cutting-edge techniques and premium materials to ensure durable and efficient solutions. Through transparent communication and personalized care, we aim to build lasting relationships with our customers, offering reliability, integrity, and excellence in every project we undertake.</p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
