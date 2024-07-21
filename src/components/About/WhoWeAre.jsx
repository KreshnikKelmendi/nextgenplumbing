import React from 'react';
import { Container, Row, Col, Card, ListGroup, Carousel } from 'react-bootstrap';
import image1 from "../../images/properties/underfloor-heating.jpg";
import AnimationTitles from '../functions/AnimationTitles';

const AboutUs = () => {
  // Define an array of image paths for the carousel
  const carouselImages = [
    image1,
    image1,
    image1
    // Add more image paths as needed
  ];

  return (
    <div className="about-us bg-light py-1 pb-lg-5">
      <Container>
        <Row className="justify-content-center">
        <Col lg={12} className="pt-3">
        <AnimationTitles className="py-2" title="About Us" />
            <p>
              At Plomberie Roger Chayer Inc., as plumbing contractors, we specialize in plumbing services for the residential, multi-family housing and commercial sectors in Montreal. Our team of professional plumbers can meticulously and efficiently install, service and repair of all types of plumbing equipment. Whether to install a new system, to unclog or thaw pipes, to perform camera-assisted inspections in order to clean drainpipes and sewer lines, or to replace old steel pipes, our team of specialists is always attentive to your needs. We also offer you all-inclusive bathroom remodeling services.
              <br /><br />
              At Plomberie Roger Chayer Inc., one of our specialties is in the area of hot-water heating and electric boilers. We perform installation, repair and maintenance work on hydronic heating equipment and can also install radiant floor heating.
            </p>
          </Col>
          <Col lg={12} className="d-flex align-items-center justify-content-center py-3 py-lg-0">
            {/* Carousel starts here */}
            <Carousel>
              {carouselImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="rounded d-block w-100 h-100"
                    src={image}
                    alt={`Slide ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* End of Carousel */}
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
