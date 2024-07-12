import React from 'react';
import plumberImage from '../../images/properties/plumber-5.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimationTitles from '../functions/AnimationTitles';
import WhyUs from './WhyUs';

const SecondService = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5 
  });

  const serviceList = [
    "Expertise and Experience",
    "Cutting-Edge Technology",
    "Customer-Focused Approach",
    "24/7 Availability",
    "Licensed and Insured"
  ];

  const listVariants = {
    hidden: {
      opacity: 0,
      y: 5
    },
    visible: index => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <div className="service-section bg-water-plumbing bg-light" style={{ minHeight: '90vh' }}>
      <Container className="d-flex align-items-center">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={plumberImage}
              alt="Plumber"
              className="img-fluid firstServiceImage rounded"
              style={{
                height: '100vh',
                objectFit: 'cover',
                maxHeight: '500px' 
              }}
            />
          </Col>
          <Col md={6}>
            <div className="service-content">
              <AnimationTitles title="Why Choose Us" />
              <p>
                At NextGen Plumbing, we redefine excellence in plumbing services with a commitment to innovation, reliability, and customer satisfaction. Here’s why our clients choose us time and again:
              </p>
              <ul className="service-list">
                {serviceList.map((item, index) => (
                  <motion.li
                    key={index}
                    ref={ref}
                    custom={index}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={listVariants}
                    style={{ listStyleType: 'none' }}
                  >
                    <i className="fas fa-check-square"></i> {item}
                  </motion.li>
                ))}
              </ul>
              <div className="water-loader"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className=''>
        <WhyUs />
      </div>
    </div>
  );
}

export default SecondService;
