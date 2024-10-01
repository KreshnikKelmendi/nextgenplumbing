import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import image1 from "../../images/properties/underfloor-heating.jpg";
import image2 from "../../images/properties/IMG_5932.JPG";
import image3 from "../../images/properties/IMG_5055.jpg"
import image4 from "../../images/properties/IMG_2580 (1).jpg"
import image5 from "../../images/properties/IMG_2317 (1).jpg"
import AnimationTitles from '../functions/AnimationTitles';

const AboutUs = () => {
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  return (
    <div className="about-us py-1 pb-lg-5" style={{ backgroundColor: "#000E5D", color: "white" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} className="pt-3">
            <AnimationTitles className="py-2" title="About Us" />
            <h4 className="fw-bold" style={{ color: "#ff0000" }}>Welcome to NEXTGEN Plumbing – Your Trusted Plumbing Partner</h4>
            <p className="mt-3">
              At NEXTGEN Plumbing, we take pride in being a family-owned business dedicated to delivering exceptional plumbing services with a personal touch. Our passion for excellence is driven by our commitment to collaborating closely with homeowners, business owners, and contractors to ensure every project meets your budget, schedule, and quality expectations.
              <br /><br />
              As a family-owned business, we value trust, integrity, and transparency. Our team is dedicated to providing personalized service and building lasting relationships with our clients. We understand that every project is unique, and we are committed to delivering solutions that are both effective and affordable.
            </p>
          </Col>
        </Row>

        {/* Full-width carousel outside the Container */}
      </Container>

      <div className="full-width-carousel">
        <Carousel className="w-100">
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <Container>
              <img
                className="rounded d-block w-100"
                style={{ height: "500px", objectFit: "cover" }}  // Adjust the height as needed
                src={image}
                alt={`Slide ${index}`}
              />
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
