import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsers, faHome, faHammer, faCogs, faToolbox, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Join() {
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
            <div
              className="service-item text-center bg-plumbing d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              onMouseEnter={() => handleHover("#000")}
              onMouseLeave={() => handleHover("")}
            >
              <div className="overlay"></div>
              <i className="fas fa-wrench fa-4x mb-3"></i>
              <AnimationTitles
                title="Plumbing Services"
                className="serviceTitle mb-2 h4"
              />
              
              <button className="serviceTitle border-0" style={{backgroundColor:"transparent"}}>
                <Link to="/plumbing-services" onClick={() => window.scrollTo({ top: 0, left: 0 })} style={{color: "white"}}>
                  See More
                </Link>
              </button>
            </div>
          </Col>

          {/* Heating Boiler Service */}
          <Col
            xs={12}
            lg={3}
            className="px-3 py-3 py-lg-1 d-flex align-items-center"
          >
            <div
              className="service-item text-center bg-underfloor d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              onMouseEnter={() => handleHover("#000")}
              onMouseLeave={() => handleHover("")}
            >
              <div className="overlay"></div>
              <i className="fas fa-fire fa-4x mb-3"></i>
              <AnimationTitles
                title="Hydronic Systems"
                className="mb-2 h4 serviceTitle"
              />
              <button className="serviceTitle border-0" style={{backgroundColor:"transparent"}}>
                <Link to="/radiant-heating" onClick={() => window.scrollTo({ top: 0, left: 0 })} style={{color: "white"}}>
                  See More
                </Link>
              </button>
            </div>
          </Col>

          {/* Gas Piping & Testing Services */}
          <Col
            xs={12}
            lg={3}
            className="px-3 px-lg-3 py-3 py-lg-1 d-flex align-items-center"
          >
            <div
              className="service-item text-center bg-gasPiping d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              onMouseEnter={() => handleHover("#000")}
              onMouseLeave={() => handleHover("")}
            >
              <div className="overlay"></div>
              <i className="fas fa-wrench fa-4x mb-3"></i>
              <AnimationTitles
                title="Gas Piping & Testing Services"
                className="serviceTitle mb-2 h4"
              />
              <button className="serviceTitle border-0" style={{backgroundColor:"transparent"}}>
                <Link to="/gas-piping&testing-services" onClick={() => window.scrollTo({ top: 0, left: 0 })} style={{color: "white"}}>
                  See More
                </Link>
              </button>
            </div>
          </Col>

          {/* Water Heaters & Water Treatment */}
          <Col
            xs={12}
            lg={3}
            className="px-3 px-lg-3 py-3 py-lg-1 d-flex align-items-center"
          >
            <div
              className="service-item text-center bg-waterheater d-flex flex-column justify-content-center"
              style={{
                width: "100%",
                height: "48vh",
                backgroundColor: backgroundColor,
              }}
              onMouseEnter={() => handleHover("#000")}
              onMouseLeave={() => handleHover("")}
            >
              <div className="overlay"></div>
              <i className="fas fa-wrench fa-4x mb-3"></i>
              <AnimationTitles
                title="Water Heaters & Water Treatment"
                className="serviceTitle mb-2 h4"
              />
              <button className="serviceTitle border-0" style={{backgroundColor:"transparent"}}>
                <Link to="/water-heaters&water-treatment" onClick={() => window.scrollTo({ top: 0, left: 0 })} style={{color: "white"}}>
                  See More
                </Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Join;
