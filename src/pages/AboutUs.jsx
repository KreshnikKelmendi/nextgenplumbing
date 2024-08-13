import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

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
          <Button variant="primary ms-0" style={{background: "#ff0000", border:'none'}}>Read More</Button>
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
                src={require("..//images/bohdan-d-fh6o-XkVQG8-unsplash.webp")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/john-o-nolan-6f_ANCcbj3o-unsplash.webp")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/julia-solonina-ci19YINguoc-unsplash.webp")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/theater-amazonas-manaus.webp")}
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
