import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import cash from "../images/properties/secure-payment.png";
import visa from "../images/properties/visa (1).png";
import mastercard from "../images/properties/card (1).png";

const Footer = () => {
  return (
    <footer className="position-relative pt-0 py-xxl-2 text-white">
      <Container>
        {/* Top Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start py-5">
          {/* Left Section */}
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 mb-md-0"
          >
            <img
              src={require("../images/logo/nextgen-white.png")}
              alt="logo"
              className="mb-3"
              style={{ width: "150px", height: "auto", objectFit: "contain" }}
            />
            <p className="mb-2">
              Please contact us if you have any specific <br /> idea or request.
            </p>
            <Link
              className="link-info link-underline-opacity-0 fw-bold"
              to={""}
            >
              fjavori@ndnextgen.com
            </Link>
          </motion.div>

          {/* Middle Section: Menu */}
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex flex-column flex-md-row gap-md-5 gap-3 mb-4 mb-md-0"
          >
            {/* Menu Links */}
            <div>
              <h6 className="fw-bold text-uppercase mb-3">Menu</h6>
              <ul className="list-unstyled">
                <li><NavLink to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="text-white">Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="text-white">About Us</NavLink></li>
                <li><NavLink to="/services" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="text-white">Services</NavLink></li>
                <li><NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="text-white">Contact</NavLink></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h6 className="fw-bold text-uppercase mb-3">Socials</h6>
              <ul className="list-unstyled">
                <li><a href="https://www.instagram.com/ndnextgen" target="_blank" rel="noreferrer" className="text-white">Instagram</a></li>
              </ul>
            </div>
          </motion.div>

          {/* Right Section: Payment Methods */}
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex flex-column"
          >
            <h6 className="fw-bold text-uppercase mb-3">Payment Methods</h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <img src={cash} className="me-2" style={{ width: "40px", height: "40px" }} alt="Check Payment" />
                Check Payment
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={visa} className="me-2" style={{ width: "40px", height: "40px" }} alt="Visa Payment" />
                Visa Payment
              </li>
              <li className="d-flex align-items-center">
                <img src={mastercard} className="me-2" style={{ width: "40px", height: "40px" }} alt="Mastercard Payment" />
                Mastercard Payment
              </li>
            </ul>
            <p className="small mt-2">Payments made via methods other than check or cash will incur a 2.5% service fee.</p>
          </motion.div>
        </div>

        {/* Operating Hours */}
        <div className="text-center text-md-start mb-5">
          <h6 className="fw-bold text-uppercase mb-3">Operating Hours</h6>
          <ul className="list-unstyled">
            <li>Monday-Friday: 8:00AM - 5:00PM</li>
            <li>Saturday: Scheduled Appointments</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top border-white"
        >
          <p className="mb-3 mb-md-0">© 2024 NEXTGEN PLUMBING. All rights reserved</p>
          <p>
            Developed by: {''}
            <a href='https://www.sync-code.com/' target='_blank' rel="noreferrer" className="link-info link-underline-opacity-0">
              Sync Code
            </a>
          </p>
        </motion.div>
      </Container>

      {/* Wave SVG */}
      <svg
        id="wave"
        className="wave-animation position-absolute w-100 bottom-0"
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(0, 14, 93, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 0, 0, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,0L30,73.5C60,147,120,294,180,318.5C240,343,300,245,360,196C420,147,480,147,540,196C600,245,660,343,720,359.3C780,376,840,310,900,253.2C960,196,1020,147,1080,114.3C1140,82,1200,65,1260,98C1320,131,1380,212,1440,245C1500,278,1560,261,1620,236.8C1680,212,1740,180,1800,196C1860,212,1920,278,1980,277.7C2040,278,2100,212,2160,212.3C2220,212,2280,278,2340,294C2400,310,2460,278,2520,253.2C2580,229,2640,212,2700,236.8C2760,261,2820,327,2880,310.3C2940,294,3000,196,3060,187.8C3120,180,3180,261,3240,245C3300,229,3360,114,3420,122.5C3480,131,3540,261,3600,261.3C3660,261,3720,131,3780,106.2C3840,82,3900,163,3960,196C4020,229,4080,212,4140,171.5C4200,131,4260,65,4290,32.7L4320,0L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
