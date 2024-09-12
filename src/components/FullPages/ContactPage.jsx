import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the Arrow Left icon
import Contact from '../contact/Contact';
import Locations from '../services/Locations';
import { Container } from 'react-bootstrap';

const ContactPage = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '20px',
  };

  const iconStyle = {
    color: '#ff0000',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const textStyle = {
    marginLeft: '16px',
    color: 'white',
    fontSize: '12px',
    textTransform: 'uppercase',
  };

  return (
    <>
      <header style={headerStyle}>
        <Container>
          <Link to="/" style={iconStyle}>
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" title='Go to Home' />
          </Link>
          <span style={textStyle}>Contact</span>
        </Container>
      </header>
      <Contact />
      <Locations />
    </>
  );
};

export default ContactPage;
