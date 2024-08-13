import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faWrench, faSyncAlt, faThermometerHalf, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const WaterHeaters = () => {
  return (
    <>
      <Container className="my-3">

        <Card className=" border-0" style={{ backgroundColor: 'transparent' }}>
          <Card.Body>

            <Row className="mb-4">
              <Col>
                <Card.Title className="text-center text-white text-uppercase p-3 rounded" style={{backgroundColor: "#000e5d"}}>
                Water Heaters and Water Treatment
                </Card.Title>
                <Card.Text className="mt-3 text-center text-white">
                  Experience consistent hot water with our top-tier water heater services. Whether you need a new installation, replacement, or repair, our expert team ensures reliable performance and energy efficiency. We specialize in both traditional tank-style water heaters and modern tankless systems, tailored to meet your specific needs.
                </Card.Text>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <h4 className="text-center text-white mb-3">Our Services:</h4>
                <Row>
                  <Col md={4} className="text-center mb-4">
                    <FontAwesomeIcon icon={faWrench} size="3x" className="text-danger mb-2" />
                    <h5 className="text-white">Installation</h5>
                  </Col>
                  <Col md={4} className="text-center mb-4">
                    <FontAwesomeIcon icon={faSyncAlt} size="3x" className="text-warning mb-2" />
                    <h5 className="text-white">Replacement</h5>
                  </Col>
                  <Col md={4} className="text-center mb-4">
                    <FontAwesomeIcon icon={faThermometerHalf} size="3x" className="text-primary mb-2" />
                    <h5 className="text-white">Repair</h5>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <h4 className="text-white text-uppercase mb-3">Fast facts about water heaters:</h4>
                <ListGroup className="list-group-flush text-uppercase">
                  {[
                    'Water heaters are devices used to heat water for your home or business.',
                    'You can get them either as a storage tank or a tankless water heater.',
                    'Water heaters can run on electricity, fuel oil, geothermal energy, natural gas, propane, or solar energy.',
                  ].map((fact, index) => (
                    <ListGroup.Item key={index} className="d-flex align-items-center" style={{ backgroundColor: '#ff0000' }}>
                      <FontAwesomeIcon icon={faCheck} className="text-primary me-3" />
                      <span className="text-white">{fact}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card className="border-0" style={{ backgroundColor: '#000e5d' }}>
                  <Card.Body className="p-4">
                    <h4 className="text-danger text-uppercase mb-3">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger me-2" />
                      Call NEXTGEN Plumbing if you are noticing any of the following:
                    </h4>
                    <ListGroup className="list-group-flush text-uppercase">
                      {[
                        'You only get cold water.',
                        "You're not getting enough hot water.",
                        'The water you\'re getting has rust in it or is a rusty color.',
                        'If you notice water on the ground near your hot water heater tank. This is a big one.',
                        'You are hearing noises from the water heater.',
                        'Your energy bill has been going up lately without explanation.',
                      ].map((warning, index) => (
                        <ListGroup.Item key={index} className="d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
                          <FontAwesomeIcon icon={faCheck} className="text-danger me-3" />
                          <span className="text-white">{warning}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default WaterHeaters;
