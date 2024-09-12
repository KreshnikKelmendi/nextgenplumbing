import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your images
import radiantHeatingImage from '../../images/properties/underfloor-heat1.jpg';
import hydronicHeatingImage from '../../images/properties/2943331.jpg';

// Card container style to ensure equal height
const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '1100px',
};

const HeatingInfo = () => {
  return (
    <Container fluid className="my-5">
      <Container>
        <Row className="text-white mb-4">
          <Col>
            <h1 className="heading">Understanding Radiant and Hydronic Heating</h1>
          </Col>
        </Row>
        <Row style={cardContainerStyle}>
          <Col md={6} className="mb-4">
            <Card style={cardStyle} className="bg-light border-0 shadow-sm">
              <Card.Img variant="top" src={radiantHeatingImage} alt="Radiant Heating" className="card-img" />
              <Card.Body>
                <Card.Title className="text-primary">Radiant Heating</Card.Title>
                <Card.Text>
                  The terms “Radiant Heating” and “Hydronic Heating” are sometimes used interchangeably, but this is a mistake. Not all forms of hydronic heating are radiant and not all forms of radiant heating are hydronic. Confused yet? Remember that hydronic heating just means that the heat-transfer medium is water. Radiant heating means that a surface is heated to the point that it radiates infrared heat through the air and that infrared radiation heats other objects. It means that we aren’t too concerned about the temperature of the air, but rather the temperature of objects – including people. Radiant heating is more comfortable than traditional forced-air heating because we typically heat the floor, which is the largest surface in the home, and humans are most comfortable when their feet are warm and their heads are cool.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Wet Installation</Card.Subtitle>
                <Card.Text>
                  “Wet” installations are most common in new homes and consist of pouring concrete over PEX pipes installed in the floor space. When the system is operating, the warm water circulates through the pipes and distributes it evenly throughout the floor and to everything in the room.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Dry Installation</Card.Subtitle>
                <Card.Text>
                  A “dry” installation is commonly used when a poured floor just isn’t practical. In this case, PEX pipes are placed in the joist space or underneath a suspended wood floor. Warm water circulates through the pipes and warms the floor above it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={cardStyle} className="bg-light border-0 shadow-sm">
              <Card.Img variant="top" src={hydronicHeatingImage} alt="Hydronic Heating" className="card-img" />
              <Card.Body>
                <Card.Title className="text-primary">Hydronic Heating</Card.Title>
                <Card.Text>
                  Hydronics is the use of water as a heat-transfer medium. Hydronic heating systems have a boiler (or water-to-water or air-to-water heat pump) that heats water that is then pumped through pipes throughout the house or building. Often when people think of hydronic heat systems they think of old-time cast iron radiators or baseboard convectors. This in turn is often associated with rooms that overheat and are very dry air. Today, modern high-efficiency boilers and controls allow us to better control the water temperature and take into account the temperature outside (this is called an “outdoor reset”) making hydronic heating the most comfortable heating option available.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">System Components</Card.Subtitle>
                <Card.Text>
                  Hydronic heating systems start with a boiler (which can be electric, natural gas, propane or even wood pellet fueled) or a heat pump (a fancy device that extracts heat from the outside air, an “air-to-water” heat pump or from the ground, “a water-to-water” heat pump,) that heats the water and then a series of pumps and controls that sends the heated water around the house. The water can be used to heat radiators, convectors, air handlers, towel warmers, bathroom floors, and other surfaces, and then back to the boiler to be reheated.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <Accordion defaultActiveKey="0" className="text-start">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Benefits & Effectiveness</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><strong>Comfort:</strong> Hydronic heating is comfortable and consistent. Your toes will always be warm if you choose to install an in-floor system.</li>
                    <li><strong>Efficiency:</strong> Water-based heating uses heat more efficiently than air-based heating. You may save on your heating bills.</li>
                    <li><strong>Dual-purpose:</strong> Some systems can heat up your home’s water for heat as well as for use out of your taps.</li>
                    <li><strong>Can include cooling:</strong> Using a hydronic air-handler allows you to not only heat the air but also add air conditioning, humidification, and filtration to your system.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeatingInfo;
