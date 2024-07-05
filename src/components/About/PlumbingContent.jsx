import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import wall from "../../images/properties/wall-plumbing.jpg";

const PlumbingComponent = () => {
  return (
    <div className='d-lg-none' style={{ minHeight: '20vh', position: 'relative' }}>
      <img
      className='secondServiceImage'
        src={wall} // Replace with your image URL
        alt="Plumbing"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: '1' }}
      >
       
      </div>
    </div>
  );
};

export default PlumbingComponent;
