import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import gas1 from "../../images/properties/Commercial-Gas-Pipes-in-boiler-room.webp"
import gas2 from "../../images/properties/Everything-You-Need-to-Know-About-Gas-Line-Repair-and-Installation-_-Pantego-TX.jpg"
import gas3 from "../../images/properties/gas-leak-detection.jpg"
import gas4 from "../../images/properties/Gas-Detection-Equipment-Rental-and-Sales.jpeg"
import gas5 from "../../images/properties/nj-certified-backflow-testing.jpg"
import gas6 from "../../images/properties/Gas-Pressure-Gauge.jpg"

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
  height: '100%', // Ensures that the card grows to fill its column
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
  flex: '1', // Ensures that the body grows to fill the card
  padding: '1rem',
};

const cardTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
};

const cardTextStyle = {
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#ff0000',
  border: 'none',
};

const buttonHoverStyle = {
  backgroundColor: '#cc0000',
};

const PlumbingServices = () => {
  return (
    <Container style={containerStyle}>
      <h2 style={{ marginBottom: '2rem', color: "white" }}>Plumbing Gas Piping and Testing Services</h2>
      <Row>
        {[
          { title: 'Gas Piping Installation', text: 'Precision installation of gas lines for residential, commercial, and multi-family applications.', img: gas1 },
          { title: 'Gas Line Repair', text: 'Prompt and effective repair of damaged or faulty gas lines to restore safety and functionality.', img: gas2 },
          { title: 'Gas Leak Detection', text: 'Advanced techniques and equipment to accurately detect and address potential gas leaks.', img: gas3 },
          { title: 'System Testing', text: 'Thorough testing of gas systems to verify integrity, safety, and proper function.', img: gas4 },
          { title: 'Backflow Testing', text: 'Thorough backflow testing to protect your water supply from contamination and ensure safety.', img: gas5 },
          { title: 'Pressure Testing', text: 'Comprehensive pressure testing to ensure your gas systems are functioning correctly.', img: gas6 },
        ].map((service, index) => (
          <Col key={index} md={6} lg={4} style={{ marginBottom: '1rem' }}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={service.img} style={imgStyle} />
              <Card.Body style={cardBodyStyle}>
                <Card.Title style={cardTitleStyle}>{service.title}</Card.Title>
                <Card.Text style={cardTextStyle}>
                  {service.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlumbingServices;