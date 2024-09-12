import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import image1 from "../images/properties/1726 (1).jpg"
import image2 from "../images/properties/IMG_5932.JPG"
import image3 from "../images/properties/IMG_5055.jpg"
import image4 from "../images/properties/IMG_4885 (1).jpg"
import { NavLink } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="About Us" className="title" />
          <p className="gray-50 mb-5">
              As new technologies develop, the construction sector is changing drastically. 
              It is important to understand both how new technologies and the traditional construction work. 
              Governments are unable to keep up with the rapid advancement of technology and modify their legal 
              frameworks to accommodate it fast enough. As technology and industry trends evolve, staying current is crucial.
             
          </p>
          <NavLink to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <Button variant="primary ms-0" style={{background: "#ff0000", border:'none'}}>Read More</Button>
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={image1}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={image2}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={image3}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={image4}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
