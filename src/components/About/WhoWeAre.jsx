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
    <div className="about-us py-1 pb-lg-5" style={{backgroundColor: "#000E5D", color:"white"}}>
      <Container>
        <Row className="justify-content-center">
        <Col lg={12} className="pt-3">
        <AnimationTitles className="py-2" title="About Us" />
        <h4 className='fw-bold' style={{color:"#ff0000"}}>Welcome to NEXTGEN Plumbing – Your Trusted Plumbing Partner</h4>
            <p className='mt-3'>
            At NEXTGEN Plumbing, we take pride in being a family-owned business dedicated to delivering exceptional plumbing services with a personal touch. Our passion for excellence is driven by our commitment to collaborating closely with homeowners, business owners, and contractors to ensure every project meets your budget, schedule, and quality expectations.
              <br /><br />
              As a family-owned business, we value trust, integrity, and transparency. Our team is dedicated to providing personalized service and building lasting relationships with our clients. We understand that every project is unique, and we are committed to delivering solutions that are both effective and affordable.
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
