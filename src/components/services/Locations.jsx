// Locations.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AnimationTitles from '../functions/AnimationTitles';
import map1 from "../../images/properties/map.jpg"

const locations = [
  {
    city: 'FARGO, ND',
    icon: faLocationDot,
    mapImage: map1 // Replace with your map image path
  },
  {
    city: 'GRAND FORKS, ND',
    icon: faLocationDot,
    mapImage: map1 // Replace with your map image path
  },
  {
    city: ' NORTH DAKOTA',
    icon: faLocationDot,
    mapImage: map1 // Replace with your map image path
  },
  {
    city: 'MINNESOTA',
    icon: faLocationDot,
    mapImage: map1 // Replace with your map image path
  }
];

const Locations = () => {
  const cardStyle = {
    transition: 'transform 0.3s ease',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    padding: '20px',
    marginBottom: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white'
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'red'
  };

  const textStyle = {
    color: '#000e5d',
    fontWeight: 'bold',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto'
  };

  const headerStyle = {
    fontWeight: 'bold',
    color: '#000e5d',
    textAlign: 'center',
    marginBottom: '40px'
  };

  const iconStyle = {
    fontSize: '50px',
    color: '#000e5d',
    marginBottom: '20px'
  };

  return (
    <Container className="mb-5 pt-lg-5 text-white">
      <AnimationTitles title="Locations where we offer our service" />
      <p className="py-3">
      We proudly offer services from our two locations Fargo and Grand Forks extending our expertise to the surrounding communities. 
      Additionally, our reach spans across North Dakota and Minnesota, serving clients through specialized contracts. Contact us to explore how we can meet your needs today!
      </p>
      <Row>
        {locations.map((location, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3}>
            <Card
              style={{ ...cardStyle, backgroundImage: `url(${location.mapImage})`, ...(location.hover && cardHoverStyle) }}
              className="h-100"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Card.Body>
                <FontAwesomeIcon icon={location.icon} style={iconStyle} />
                <Card.Title style={titleStyle}>{location.city}</Card.Title>
                <Card.Text style={textStyle}>{location.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Locations;
