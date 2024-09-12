import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the Arrow Left icon
import WhoWeAre from '../About/WhoWeAre';
import ValuesComponent from '../About/ValuesComponent';
import SecondAbout from '../About/SecondAbout';
import { Container } from 'react-bootstrap';

const AboutUsPage = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/', '') || 'home'; // Get the current path, default to 'home' if root

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000e5d',
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
          <span style={textStyle}>{currentPath}</span>
        </Container>
      </header>
      <WhoWeAre />
      <ValuesComponent />
      <SecondAbout />
    </>
  );
};

export default AboutUsPage;
