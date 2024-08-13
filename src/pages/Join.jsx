import React, { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsers, faHome, faHammer, faCogs, faToolbox, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


function Join() {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Intersection observer hook
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.1 // Percentage of the card visible
  });

  // State to manage background color on hover
  const [backgroundColor, setBackgroundColor] = useState("");

  // Function to handle hover state
  const handleHover = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="join">
      <Container>
      <div className="services-header mb-4">
  <AnimationTitles title="Our Services" className="title" />
  <p className="text-white mt-3 col-12 col-lg-8 text-uppercase">
    We offer comprehensive plumbing solutions across various sectors:
  </p>
  <ul className="text-white mt-3 col-12 col-lg-8">
    <p>
      <FontAwesomeIcon icon={faBuilding} className="me-2" /> Commercial: Custom plumbing solutions for businesses, ensuring minimal disruption to your operations
    </p>
    <p>
      <FontAwesomeIcon icon={faUsers} className="me-2" /> Multi-Family: Reliable and efficient services for apartment complexes and multi-unit buildings
    </p>
    <p>
      <FontAwesomeIcon icon={faHome} className="me-2" /> Residential: Expert plumbing services for homeowners, focusing on quality and care in every project
    </p>
    <p>
      <FontAwesomeIcon icon={faHammer} className="me-2" /> Remodeling: Upgrading and updating plumbing systems to enhance your living or working space
    </p>
    <p>
      <FontAwesomeIcon icon={faCogs} className="me-2" /> New Construction: Comprehensive plumbing installations for new buildings and developments
    </p>
    <p>
      <FontAwesomeIcon icon={faToolbox} className="me-2" /> Service: Prompt and professional plumbing services for repairs and maintenance
    </p>
    <p>
      <FontAwesomeIcon icon={faPlusCircle} className="me-2" /> +More: Additional services tailored to meet your specific plumbing needs
    </p>
  </ul>
</div>

        <Row>
          {/* Plumbing Service */}
          <Col
            xs={12}
            lg={3}
            className="px-3 px-lg-3 py-3 py-lg-1 d-flex align-items-center"
          >
            <motion.div
              ref={ref}
              className="service-item text-center bg-plumbing d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => handleHover("#000")} 
              onHoverEnd={() => handleHover("")} 
            >
              <div className="overlay"></div>
              <i className="fas fa-wrench fa-4x mb-3"></i>
              <AnimationTitles
                title="Plumbing Services"
                className="serviceTitle mb-2 h4"
              />
               <Button variant="" className="serviceTitle">See More</Button>
            </motion.div>
          </Col>

          {/* Heating Boiler Service */}
          <Col
            xs={12}
            lg={3}
            className="px-3 py-3 py-lg-1 d-flex align-items-center"
          >
            <motion.div
              ref={ref}
              className="service-item text-center bg-underfloor d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => handleHover("#000")}
              onHoverEnd={() => handleHover("")} 
            >
              <div className="overlay"></div>
              <i className="fas fa-fire fa-4x mb-3"></i>
              <AnimationTitles
                title="Hydronic Systems"
                className="mb-2 h4 serviceTitle"
              />
               <Button variant="" className="serviceTitle">See More</Button>
            </motion.div>
          </Col>

          <Col
      xs={12}
      lg={3}
      className="px-3 px-lg-3 py-3 py-lg-1 d-flex align-items-center"
    >
      <motion.div
        ref={ref}
        className="service-item text-center bg-gasPiping d-flex flex-column justify-content-center"
        style={{
          width: "100%",
          height: "48vh",
          backgroundColor: backgroundColor,
        }}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => handleHover("#000")}
        onHoverEnd={() => handleHover("")}
      >
        <div className="overlay"></div>
        <i className="fas fa-wrench fa-4x mb-3"></i>
        <AnimationTitles
          title="Gas Piping & Testing Services"
          className="serviceTitle mb-2 h4"
        />
        <Button variant="" className="serviceTitle">See More</Button>
      </motion.div>
    </Col>
          <Col
            xs={12}
            lg={3}
            className="px-3 px-lg-3 py-3 py-lg-1 d-flex align-items-center"
          >
            <motion.div
              ref={ref}
              className="service-item text-center bg-waterheater d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => handleHover("#000")} 
              onHoverEnd={() => handleHover("")} 
            >
              <div className="overlay"></div>
              <i className="fas fa-wrench fa-4x mb-3"></i>
              <AnimationTitles
                title="Water Heaters & Water Treatment"
                className="serviceTitle mb-2 h4"
              />
               <Button variant="" className="serviceTitle">See More</Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Join;
