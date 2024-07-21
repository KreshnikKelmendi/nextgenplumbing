import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import image4 from "../../images/properties/567.jpg";
import AnimationTitles from '../functions/AnimationTitles';

const serviceFeatures = [
  {
    title: "Emergency Plumbing Repairs",
    description: "Available 24/7 for any emergency plumbing repairs, ensuring that your home is safe and functional at all times.",
    backgroundColor: "#ff0000",
  },
  {
    title: "Pipe Installation & Repair",
    description: "Expert pipe installation and repair services for both residential and commercial properties.",
    backgroundColor: "#000e5d",
  },
  {
    title: "Water Heater Services",
    description: "Comprehensive water heater services, including installation, maintenance, and repair, to ensure you always have hot water.",
    backgroundColor: "#000e5d",
  },
  {
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to keep your pipes clear and prevent blockages.",
    backgroundColor: "#ff0000",
  },
];

const ServicesFeature = () => {
  return (
    <div className='bg-white py-5'>
      <Container className="py-8 lg:py-16 bg-white">
        <div className="pb-5">
          <AnimationTitles title="Plumbing Services" />
        </div>

        <Row className="mb-6">
          <Col md={4} className="mb-6">
            <Image className="w-100 mx-auto" src={image4} alt="can_help_banner" />
          </Col>
          <Col md={8}>
            <Row>
              {serviceFeatures.map((feature, index) => (
                <Col sm={6} className="mb-4" key={index}>
                  <Card
                    style={{ backgroundColor: feature.backgroundColor }}
                    className="text-white h-100 py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl"
                  >
                    <Card.Body>
                      <Card.Title className="text-2xl font-bold text-md mb-6">{feature.title}</Card.Title>
                      <Card.Text className="text-sm">{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesFeature;
