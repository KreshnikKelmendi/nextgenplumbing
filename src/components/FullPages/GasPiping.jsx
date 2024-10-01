import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gas1 from "../../images/properties/Commercial-Gas-Pipes-in-boiler-room.webp";
import gas2 from "../../images/properties/Everything-You-Need-to-Know-About-Gas-Line-Repair-and-Installation-_-Pantego-TX.jpg";
import gas3 from "../../images/properties/gas-leak-detection.jpg";
import gas4 from "../../images/properties/Gas-Detection-Equipment-Rental-and-Sales.jpeg";
import gas5 from "../../images/properties/nj-certified-backflow-testing.jpg";
import gas6 from "../../images/properties/Gas-Pressure-Gauge.jpg";

const containerStyle = {
  marginTop: '3rem',
};

const cardStyle = {
  border: 'none',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const imgStyle = {
  height: '200px',
  objectFit: 'cover',
};

const cardBodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  flex: '1',
  padding: '1rem',
};

const cardTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
};

const cardTextStyle = {
  fontSize: '1rem',
};

const sectionStyle = {
  backgroundColor: '#f8f9fa',
  padding: '2rem',
  borderRadius: '15px',
  marginBottom: '2rem',
};

const sectionHeaderStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  
};

const sectionTextStyle = {
  fontSize: '1rem',
  color: '#333',
};

const PlumbingServices = () => {
  return (
    <Container style={containerStyle}>
      <h2 style={{ marginBottom: '2rem', color: 'white' }}>
        Plumbing Gas Piping and Testing Services
      </h2>

      {/* Service Cards */}
      <Row>
        {[
          {
            title: 'Gas Piping Installation',
            text: 'Precision installation of gas lines for residential, commercial, and multi-family applications.',
            img: gas1,
          },
          {
            title: 'Gas Line Repair',
            text: 'Prompt and effective repair of damaged or faulty gas lines to restore safety and functionality.',
            img: gas2,
          },
          {
            title: 'Gas Leak Detection',
            text: 'Advanced techniques and equipment to accurately detect and address potential gas leaks.',
            img: gas3,
          },
          {
            title: 'System Testing',
            text: 'Thorough testing of gas systems to verify integrity, safety, and proper function.',
            img: gas4,
          },
          {
            title: 'Backflow Testing',
            text: 'Thorough backflow testing to protect your water supply from contamination and ensure safety.',
            img: gas5,
          },
          {
            title: 'Pressure Testing',
            text: 'Comprehensive pressure testing to ensure your gas systems are functioning correctly.',
            img: gas6,
          },
        ].map((service, index) => (
          <Col key={index} md={6} lg={4} style={{ marginBottom: '1rem' }}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={service.img} style={imgStyle} />
              <Card.Body style={cardBodyStyle}>
                <Card.Title style={cardTitleStyle}>{service.title}</Card.Title>
                <Card.Text style={cardTextStyle}>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
       {/* Consultation and Inspection Section */}
       <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Consultation and Inspection</h3>
        <p style={sectionTextStyle}>
          Plumbing Inspections: Providing thorough inspections for home buyers or routine maintenance.
        </p>
        <p style={sectionTextStyle}>
          Consultation Services: Advising on plumbing system design, upgrades, and efficiency improvements.
        </p>
        <p style={sectionTextStyle}>
          Trust us to deliver reliable and professional gas piping, Testing, and Inspection solutions, prioritizing safety and efficiency for your peace of mind.
        </p>
      </div>
    </Container>
  );
};

export default PlumbingServices;
