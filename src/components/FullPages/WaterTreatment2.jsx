import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const WaterTreatment2 = () => {
  return (
    <Container fluid className="p-4 bg-light text-dark">
      <h1 className=" mb-4" style={{ color: '#00035d' }}>Water Heaters and Water Treatment</h1>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 style={{ color: '#ff0000' }}>Water Treatment</h2>
              <p>Elevate the quality of your water with our advanced water treatment solutions. Our comprehensive services include the installation and maintenance of filtration and purification systems to ensure your water is clean, safe, and great-tasting. From whole-house systems to specialized filters, we provide solutions designed to address your unique water quality concerns.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 style={{ color: '#00035d' }}>Water Softeners</h3>
              <p>A water softener system is designed to remove hardness-causing minerals, primarily calcium and magnesium, from your water.</p>
              <h4>Types of Water Softeners</h4>
              <ul>
                <li>Ion-exchange softeners</li>
                <li>Salt-free softeners</li>
                <li>Dual-tank softeners</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 style={{ color: '#00035d' }}>Reverse Osmosis</h3>
              <p>Reverse osmosis (RO) is a water purification process that removes ions, molecules, and larger particles from drinking water.</p>
              <h4>How Reverse Osmosis Works</h4>
              <ul>
                <li>Pre-filtration: Removes sediment and chlorine.</li>
                <li>Semi-permeable Membrane: Filters out contaminants.</li>
                <li>Post-filtration: Further cleanses the water.</li>
              </ul>
              <h4>Benefits of Reverse Osmosis</h4>
              <ul>
                <li>Effective Contaminant Removal</li>
                <li>Improved Taste and Odor</li>
                <li>Healthier Drinking Water</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 style={{ color: '#ff0000' }}>Water Filtration</h3>
              <p>Water filtration is a process used to remove impurities and contaminants from water, making it safe for consumption or other uses.</p>
              <h4>Filtration Methods</h4>
              <ul>
                <li>Physical Filtration: Using barriers like membranes.</li>
                <li>Chemical Filtration: Activated carbon traps impurities.</li>
                <li>Biological Filtration: Biofilms remove contaminants.</li>
                <li>Ion Exchange: Removes unwanted minerals like calcium and magnesium.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WaterTreatment2;
