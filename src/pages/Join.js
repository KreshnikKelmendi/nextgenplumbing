import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Join() {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="join position-relative">
      <Container>
        <div className="services-header mb-5">
          <AnimationTitles title="What We Do Best" className="title" />
          <p className="text-white mt-3 col-12 col-lg-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla at
            semper justo, quis maximus elit. Donec vel urna eget eros
            ullamcorper posuere eget quis sapien.
          </p>
        </div>
        <Row>
          {/* Service 1 */}
          <Col xs={12} lg={4} className="px-3 py-5 py-lg-0 py-xxl-5">
            <motion.div
              className="service-item text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <i className="fas fa-wrench fa-4x mb-4"></i>
              <AnimationTitles
                title="Emergency Repairs"
                className="text-white mb-3 h4"
              />
            </motion.div>
          </Col>

          {/* Service 2 */}
          <Col xs={12} lg={4} className="px-3 py-5 py-lg-0 py-xxl-5">
            <motion.div
              className="service-item text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <i className="fas fa-tools fa-4x mb-4"></i>
              <AnimationTitles
                title="Installation Services"
                className="text-white mb-3 h4"
              />
            </motion.div>
          </Col>

          {/* Service 3 */}
          <Col xs={12} lg={4} className="px-3 py-5 py-lg-0 py-xxl-5">
            <motion.div
              className="service-item text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <i className="fas fa-cog fa-4x mb-4"></i>
              <AnimationTitles
                title="Maintenance"
                className="text-white mb-3 h4"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Join;
