import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { useInView } from "react-intersection-observer";

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
          <p className="text-white mt-3 col-12 col-lg-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla at
            semper justo, quis maximus elit. Donec vel urna eget eros
            ullamcorper posuere eget quis sapien.
          </p>
        </div>
        <Row>
          {/* Plumbing Service */}
          <Col
            xs={12}
            lg={6}
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
            </motion.div>
          </Col>

          {/* Heating Boiler Service */}
          <Col
            xs={12}
            lg={6}
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
                title="Underfloor Heating Services"
                className="mb-2 h4 serviceTitle"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Join;
