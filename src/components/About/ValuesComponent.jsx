import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faSmile, faBalanceScale, faClock } from '@fortawesome/free-solid-svg-icons';

const ValuesComponent = () => {
  const values = [
    {
      title: 'Precision',
      icon: faWrench,
      description:
        'We offer unparalleled expertise and reliable services in plumbing, heating, cooling, and dirt work solutions. Our commitment to customer satisfaction is evident in our top-notch craftsmanship, efficient problem-solving, and exceptional attention to detail.'
    },
    {
      title: 'Customer Satisfaction',
      icon: faSmile,
      description:
        'Putting the customer first is our priority. We strive to exceed expectations by providing exceptional service, listening to their needs, and resolving issues promptly.'
    },
    {
      title: 'Integrity and Transparency',
      icon: faBalanceScale,
      description:
        'Maintaining high ethical standards in all interactions with customers, employees, and suppliers. Our business thrives on open and transparent communication.'
    },
    {
      title: 'Service Every Time',
      icon: faClock,
      description:
        'We guarantee high-quality workmanship and services. Every project is completed with precision and meticulous attention to detail.'
    }
  ];

  // Intersection Observer options
  const options = {
    threshold: 0.5 // Trigger when 50% of the card is visible
  };

  return (
    <div className="values-section py-5 bg-light">
      <Container className='py-xxl-5'>
        <h2 className="text-white">Our Values</h2>
        <p className='text-white col-12 col-lg-6'>Nextgen Plumbing is committed to providing exceptional service through our Preventative Maintenance program. We offer comprehensive support and solutions to ensure the reliability and efficiency of your plumbing.</p>
        <Row className="justify-content-center">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} options={options} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

const ValueCard = ({ value, index, options }) => {
  const [ref, inView] = useInView(options);

  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
  };

  return (
    <Col md={6} lg={3} className="mb-4 py-3 py-xxl-5">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="value-card h-100 border-0"
      >
        <Card.Body>
          <div className="d-flex align-items-center mb-3">
            <div className="mr-3">
              <FontAwesomeIcon icon={value.icon} style={{ color: '#ff0000', fontSize: '2rem' }} />
            </div>
            <div className='px-3'>
            <h5 style={{ color: '#ff0000', textTransform: 'uppercase', marginRight: '10px', fontSize:"18px" }}>{value.title}</h5>
            </div>
          </div>
          <Card.Text className="py-2">{value.description}</Card.Text>
        </Card.Body>
      </motion.div>
    </Col>
  );
};

export default ValuesComponent;
