import React from 'react';
import { Container, Row, Col, Card, ListGroup, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faPhoneAlt, faUserTie, faChartLine } from '@fortawesome/free-solid-svg-icons';
import image1 from "../../images/properties/underfloor-heating.jpg"

const AboutUs = () => {
  // Define an array of image paths for the carousel
  const carouselImages = [
    image1,
    image1,
    image1
    // Add more image paths as needed
  ];

  return (
    <div className="about-us bg-white py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <h1 className="mb-4">About Nextgen Plumbing</h1>
            <Card>
              <Card.Body>
                <Card.Text>
                  Nextgen Plumbing is committed to providing exceptional service through our Preventative Maintenance program. We offer comprehensive support and solutions to ensure the reliability and efficiency of your plumbing and sprinkler systems.
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row className="align-items-center">
                    <Col md={2} className="text-center">
                      <FontAwesomeIcon icon={faTools} className="fs-1 mb-2" />
                    </Col>
                    <Col md={10} style={{ backgroundColor: "#000e5d", color: "white", padding: "8px" }}>
                      <h5>Hands-on Transition</h5>
                      <p>
                        We understand the challenges of changing plumbing vendors. A dedicated project lead ensures a seamless transition and immediate service initiation.
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className="align-items-center">
                    <Col md={2} className="text-center">
                      <FontAwesomeIcon icon={faPhoneAlt} className="fs-1 mb-2" />
                    </Col>
                    <Col md={10} style={{ backgroundColor: "#ff0000", color: "white", padding: "8px" }}>
                      <h5>24/7 Support</h5>
                      <p>
                        Our Preventative Maintenance clients receive 24/7/365 support from a dedicated client lead, ensuring prompt assistance whenever needed.
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className="align-items-center">
                    <Col md={2} className="text-center">
                      <FontAwesomeIcon icon={faUserTie} className="fs-1 mb-2" />
                    </Col>
                    <Col md={10} style={{ backgroundColor: "#000e5d", color: "white", padding: "8px" }}>
                      <h5>Qualified Staff</h5>
                      <p>
                        Each client is assigned a dedicated Field Supervisor to provide consistent service and serve as a personal point of contact for all plumbing needs.
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              
              </ListGroup>
            </Card>
          </Col>
          <Col lg={6} className="align-items-center justify-content-center py-3 py-lg-0" style={{height:"100%"}}>
            <div lg={12} className='h-100'>
              {/* Carousel starts here */}
              <Carousel>
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block rounded h-100 w-100"
                      src={image}
                      alt={`Slide ${index}`}
                      
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* End of Carousel */}
            </div>
            <div className='d-block pt-3 bg-water-plumbing2'>
                <p>At Plomberie Roger Chayer Inc., as plumbing contractors, we specialize in plumbing services for the residential, multi-family housing and commercial sectors in Montreal. Our team of professional plumbers can meticulously and efficiently install, service and repair of all types of plumbing equipment. Whether to install a new system, to unclog or thaw pipes, to perform camera-assisted inspections in order to clean drainpipes and sewer lines, or to replace old steel pipes, our team of specialists is always attentive to your needs. We also offer you all-inclusive bathroom remodeling services.
<br /><br/>
At Plomberie Roger Chayer Inc., one of our specialties is in the area of hot-water heating and electric boilers. We perform installation, repair and maintenance work on hydronic heating equipment and can also install radiant floor heating.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
