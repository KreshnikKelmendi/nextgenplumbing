import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AllPlumbing = () => {
  const services = [
    {
      title: 'Installation Services',
      items: [
        'Commercial: Tailored plumbing solutions for businesses of all sizes, ensuring minimal disruption.',
        'Multi-Family: Reliable and efficient services for apartment complexes and multi-unit buildings.',
        'Residential: Expert plumbing services for homeowners, focusing on quality and care.',
        'Service: Prompt and professional plumbing services for any repairs or maintenance.',
        'Water Heaters (Electric or Gas): Reliable and efficient water heaters for consistent hot water.',
        'Plumbing Repairs: Quick, expert repairs for all your plumbing issues.',
        'Plumbing Remodel: Transform your space with updated plumbing systems.',
        'New Construction Plumbing: Comprehensive plumbing installations for new builds.',
        'Tankless Water Heaters: Modern, space-saving tankless water heaters for energy efficiency.',
        'Sump Pumps: Dependable installations and maintenance to protect against water damage.',
        'Water Treatment: Advanced solutions for clean, safe, and great-tasting water.',
      ],
    },
    {
      title: 'Repair Services',
      items: [
        'Leak Repairs: Fixing leaks in pipes, fixtures, and appliances.',
        'Clog Removal: Clearing blockages in sinks, toilets, and drains.',
        'Pipe Repair: Repairing or replacing damaged or burst pipes.',
        'Water Heater Repair: Troubleshooting and repairing water heaters.',
        'Sump Pump Repair: Repairing malfunctioning sump pumps.',
      ],
    },
    {
      title: 'Maintenance Services',
      items: [
        'Drain Cleaning: Regular cleaning of drains to prevent clogs.',
        'Pipe Inspections: Using cameras to inspect pipes and diagnose issues.',
        'Water Heater Maintenance: Routine maintenance to extend the life of water heaters.',
        'Backflow Testing: Testing to maintain water supply safety from contamination.',
      ],
    },
  ];

  return (
    <Container className="py-5" style={{ color: 'white' }}>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100" bg="dark" text="white" border="light">
              <Card.Body>
                <Card.Title className="text-center" style={{ fontSize: '1.5rem', color: '#ff0000' }}>
                  {service.title}
                </Card.Title>
                <ul className="mt-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllPlumbing;
