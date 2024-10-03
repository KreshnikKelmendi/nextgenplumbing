import React from "react";
import { Container, Accordion, Card, Row, Col } from "react-bootstrap";

const PlumbingServices = () => {
  return (
    <Container className="my-5 text-white">
      <h1 className="mb-5">Plumbing Services</h1>
      <p className="mb-5">
        Experience top-notch plumbing solutions with our skilled team. From rapid repairs and efficient installations to comprehensive maintenance, we handle all your plumbing needs with precision and care. Whether it's fixing leaks, upgrading fixtures, or managing new construction, trust us for reliable, high-quality service that keeps your home or business running smoothly.
      </p>

      <Accordion defaultActiveKey="0" className="custom-accordion">
        {/* Installation Services */}
        <Accordion.Item eventKey="1" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">1. Installation Services</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row style={{ rowGap: '10px' }}>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Commercial</Card.Title>
                    <Card.Text>
                      Tailored plumbing solutions for businesses of all sizes, ensuring minimal disruption to your operations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Multi-Family</Card.Title>
                    <Card.Text>
                      Reliable and efficient services for apartment complexes and multi-unit buildings.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Residential</Card.Title>
                    <Card.Text>
                      Expert plumbing services for homeowners, focusing on quality and care in every project.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Service</Card.Title>
                    <Card.Text>
                      Prompt and professional plumbing services for any repairs or maintenance needs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Heaters ( Electric or Gas)</Card.Title>
                    <Card.Text>
                      Reliable and efficient water heaters to ensure consistent hot water for your home or business.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Plumbing Repairs</Card.Title>
                    <Card.Text>
                      Expert repairs for all your plumbing issues, ensuring quick fixes and long-lasting solutions
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Plumbing Remodel</Card.Title>
                    <Card.Text>
                      Transform your space with our remodeling services, including updated plumbing systems for enhanced functionality.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>New Construction Plumbing</Card.Title>
                    <Card.Text>
                      Comprehensive plumbing installations for new builds, from initial setup to final touches.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Tankless Water Heaters</Card.Title>
                    <Card.Text>
                      Modern, space-saving tankless water heaters that provide on-demand hot water with energy efficiency.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Sump Pumps</Card.Title>
                    <Card.Text>
                      Dependable sump pump installations and maintenance to protect your property from water damage.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Treatment</Card.Title>
                    <Card.Text>
                      Advanced water treatment solutions to ensure clean, safe, and great-tasting water for your family or business. Water Softener and Water Conditioning Installation
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Filtration Systems</Card.Title>
                    <Card.Text>
                      Installation of whole-house or under-sink filtration systems.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Drain Cleaning</Card.Title>
                    <Card.Text>
                      Professional drain cleaning services to keep your plumbing running smoothly and prevent clogs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Sewers</Card.Title>
                    <Card.Text>
                      Expert sewer services including repairs, Installs, and inspections to keep your system in top condition.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Sinks</Card.Title>
                    <Card.Text>
                      Installation and repair of sinks to suit any style and function, ensuring durability and convenience.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Faucets and Fixtures</Card.Title>
                    <Card.Text>
                      From sleek modern designs to timeless classics, enhance both functionality and style with top-quality installations. Elevate your kitchen and bathroom installing new sinks, faucets, showerheads, and other fixtures.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Toilets</Card.Title>
                    <Card.Text>
                      Efficient toilet installations and repairs to enhance comfort and performance in your bathroom.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Showers</Card.Title>
                    <Card.Text>
                      Custom shower installations and upgrades for a luxurious and refreshing bathing experience.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Bathtubs</Card.Title>
                    <Card.Text>
                      Stylish and functional bathtubs installed to elevate your bathroom and meet your relaxation needs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Garbage Disposals</Card.Title>
                    <Card.Text>
                      High-performance garbage disposal systems to efficiently handle kitchen waste and reduce clutter.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Gas Lines</Card.Title>
                    <Card.Text>
                      Safe and reliable gas line installations and repairs to ensure the secure operation of your gas appliances..
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Backflow Testing</Card.Title>
                    <Card.Text>
                      Thorough backflow testing to protect your water supply from contamination and ensure safety.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Backflow Prevention Devices</Card.Title>
                    <Card.Text>
                      Installing devices to prevent backflow and protect water supplies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Hydronic Heating</Card.Title>
                    <Card.Text>
                      Efficient hydronic heating systems that use water to provide even and comfortable warmth throughout your space
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Radiant Heating</Card.Title>
                    <Card.Text>
                      Innovative radiant heating solutions for a cozy, energy-efficient way to warm your floors and rooms.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Sump Pump Bypass</Card.Title>
                    <Card.Text>
                      Stay protected from basement flooding during cold weather and blocked lines with our reliable sump pump bypass systems. Continuous protection when you need it most!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Sump Pump Bypass</Card.Title>
                    <Card.Text>
                      Stay protected from basement flooding during cold weather and blocked lines with our reliable sump pump bypass systems. Continuous protection when you need it most!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Steam Showers</Card.Title>
                    <Card.Text>
                      Transform your bathroom into a luxurious retreat with our state-of-the-art steam showers. Enjoy soothing steam and unparalleled relaxation in the comfort of your home
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Radon Mitigation</Card.Title>
                    <Card.Text>
                      Protect your loved ones from dangerous radon gas with our effective mitigation services. Safe, reliable solutions for a healthier home environment.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Repair Services */}
        <Accordion.Item eventKey="2" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">2. Repair Services</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row style={{ rowGap: '10px' }}>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Leak Repairs</Card.Title>
                    <Card.Text>
                      Fixing leaks in pipes, fixtures, and appliances.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Clog Removal</Card.Title>
                    <Card.Text>
                      Clearing blockages in sinks, toilets, and drains.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Pipe Repair</Card.Title>
                    <Card.Text>
                      Repairing or replacing damaged or burst pipes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Heater Repair</Card.Title>
                    <Card.Text>
                      Troubleshooting and repairing issues with water heaters.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Sump Pump Repair</Card.Title>
                    <Card.Text>
                      Repairing malfunctioning sump pumps.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Maintenance Services */}
        <Accordion.Item eventKey="3" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">3. Maintenance Services</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row style={{ rowGap: '10px' }}>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Drain Cleaning</Card.Title>
                    <Card.Text>
                      Regular cleaning of drains to prevent clogs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Pipe Inspections</Card.Title>
                    <Card.Text>
                      Using cameras to inspect pipes and diagnose issues.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Heater Maintenance</Card.Title>
                    <Card.Text>
                      Routine maintenance to extend the life of water heaters.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Backflow Testing</Card.Title>
                    <Card.Text>
                      Testing and maintaining water supply from any contamination.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Emergency Services */}
        <Accordion.Item eventKey="4" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">4. Emergency Services</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Emergency Repairs</Card.Title>
                    <Card.Text>
                      Providing urgent repairs for plumbing emergencies such as burst pipes or severe leaks.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Remodeling and Upgrades */}
        <Accordion.Item eventKey="5" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">5. Remodeling and Upgrades</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Plumbing Remodel</Card.Title>
                    <Card.Text>
                      Updating or redesigning plumbing systems as part of home or business renovations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Fixture Upgrades</Card.Title>
                    <Card.Text>
                      Replacing outdated fixtures with modern, efficient models.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Bathroom and Kitchen Remodels</Card.Title>
                    <Card.Text>
                      Overhauling plumbing systems during kitchen or bathroom remodels.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">6. Drain Cleaning</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Drain Cleaning</Card.Title>
                    <Card.Text>
                      Regular cleaning of drains to prevent clogs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">7. Pipe Inspections</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Pipe Inspections</Card.Title>
                    <Card.Text>
                      Using cameras to inspect pipes and diagnose issues.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">8. Water Heater Maintenance</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Heater Maintenance</Card.Title>
                    <Card.Text>
                      Routine maintenance to extend the life of water heaters.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">9. Backflow Testing</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Backflow Testing</Card.Title>
                    <Card.Text>
                      Testing and maintaining water supply from any contamination.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* New Construction */}
        <Accordion.Item eventKey="7" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">10. New Construction</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Plumbing Systems for New Builds</Card.Title>
                    <Card.Text>
                      Installing complete plumbing systems in new construction projects.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Underground Plumbing</Card.Title>
                    <Card.Text>
                      Installing and managing all underground plumbing systems, including sewer, drain, waste, and water.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Rough-In Plumbing</Card.Title>
                    <Card.Text>
                      Installing pipes and systems before walls are closed up in new constructions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        {/* Specialized Services */}
        <Accordion.Item eventKey="8" className="custom-accordion-item">
          <Accordion.Header className="custom-accordion-header">11. Specialized Services</Accordion.Header>
          <Accordion.Body className="custom-accordion-body">
            <Row>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Water Pressure Regulation</Card.Title>
                    <Card.Text>
                      Installing pressure regulators to control and stabilize water pressure.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Trenchless Pipe Replacement</Card.Title>
                    <Card.Text>
                      Using trenchless technology to replace pipes with minimal digging.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 h-100 custom-card">
                  <Card.Body>
                    <Card.Title>Grease Trap Maintenance</Card.Title>
                    <Card.Text>
                      Cleaning and maintaining grease traps in commercial kitchens.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </Container>
  );
};

export default PlumbingServices;
