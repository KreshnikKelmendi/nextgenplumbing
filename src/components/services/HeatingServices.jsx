import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import image5 from "../../images/properties/underfloor-heat1.jpg";
import AnimationTitles from '../functions/AnimationTitles';

const serviceFeatures = [
  {
    title: "Underfloor Heating Installation",
    description: "Complete underfloor heating installation services, ensuring your home is warm and comfortable.",
    backgroundColor: "#ff0000",
  },
  {
    title: "Underfloor Heating Repair",
    description: "Fast and efficient repairs for underfloor heating systems to keep your home running smoothly.",
    backgroundColor: "#000e5d",
  },
  {
    title: "Underfloor Heating Maintenance Services",
    description: "Regular maintenance services to ensure your underfloor heating system operates optimally.",
    backgroundColor: "#000e5d",
  },
  {
    title: "Underfloor Heating Design Consultations",
    description: "Professional consultations to design and plan the best underfloor heating systems for your needs.",
    backgroundColor: "#ff0000",
  },
];

const HeatingServices = () => {
  return (
    <div className='bg-white py-5'>
      <Container className="py-8 lg:py-16 bg-white">
        <div className="pb-5">
          <AnimationTitles title="Underfloor Heating Services" />
        </div>

        <Row className="mb-6">
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
          <Col md={4} className="mb-6">
            <Image className="w-100 mx-auto" src={image5} alt="underfloor_heating_image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeatingServices;
