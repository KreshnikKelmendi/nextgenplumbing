import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import plumbingman from "../../images/properties/plumbing-man.jpeg";

const WhyUs = () => {
  // Function to handle the phone call
  const handleCall = () => {
    window.open('tel:+123456789', '_blank');
  };

  return (
    <div className="nextgen-plumbing py-3 py-lg-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start mb-4 mb-md-0">
            <h2 className="mb-4">What Can You Depend on When You Call NextGen Plumbing?</h2>
            <ul className="" style={{color: '#000e5d'}}>
              <li className='my-1'><strong>Licensed Experts.</strong></li>
              <li className=''><strong>Insured Plumbers.</strong></li>
              <li className='my-1'><strong>In-Home Estimates.</strong></li>
              <li><strong>Guaranteed Parts & Workmanship.</strong></li>
              <li className='my-1'><strong>Same Prices on Weekends & Holidays.</strong></li>
              <li><strong>Upfront, Flat Rate Pricing.</strong></li>
              <li className='my-1'><strong>Courteous, Uniformed Professionals.</strong></li>
              <li><strong>Locally Owned & Operated Difference.</strong></li>
              <li className='my-1'><strong>Convenient Appointment Times.</strong></li>
            </ul>
            {/* Button to call the phone number */}
            <div className="d-flex align-items-center mt-4">
              <button className='btn' style={{background: "#000e5d", color: 'white'}} onClick={handleCall}><i className="fas fa-phone-alt me-2"></i> +1 234-567-89</button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src={plumbingman}
              alt="NextGen Plumbing"
              className="rounded img-fluid thirdServiceImage"
              style={{
                height: '100vh',
                objectFit: 'cover',
                maxHeight: '500px' 
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
