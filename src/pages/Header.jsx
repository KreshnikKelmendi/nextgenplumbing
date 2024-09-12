import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Loading() {
  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="NEXTGEN PLUMBING" className="fw-bold" />
          <p className="text-white mt-3">
          Welcome to <b>NextGen Plumbing</b>, where we redefine what it means to have exceptional plumbing service. With a commitment to quality, reliability, and customer satisfaction, we offer a comprehensive range of plumbing solutions.
          </p>
            <Button variant="primary ms-0 mt-2" style={{backgroundColor: "#ff0000", border: 'none'}}>Read More</Button>
          <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4">
  {/* Other content */}
<div
  style={{ color: "white" }}
  className="d-none d-md-flex justify-content-between align-items-center my-4 mt-lg-5"
>
  <div className="text-center px-md-3">
    <i className="fas fa-toolbox fs-1 d-block mb-2"></i>
    <h5 className="fw-bold mb-0" style={{ color: "white", fontWeight: '700' }}>Expert Team</h5>
    <span style={{ color: "gray", fontWeight: '700' }}>licensed professionals</span>
  </div>
  <div className="text-center px-md-3">
    <i className="fas fa-handshake fs-1 d-block mb-2"></i>
    <h5 className="fw-bold mb-0" style={{ color: "white", fontWeight: '700' }}>Trustworthy Service</h5>
    <span style={{ color: "gray", fontWeight: '700' }}>customer-first approach</span>
  </div>
  <div className="text-center px-md-3">
    <i className="fas fa-shower fs-1 d-block mb-2"></i>
    <h5 className="fw-bold mb-0" style={{ color: "white", fontWeight: '700' }}>Latest Solutions</h5>
    <span style={{ color: "gray", fontWeight: '700' }}>modern technology</span>
  </div>
</div>

  {/* Other content */}
</Container>

        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5"
        >
          <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/properties/plumber-r2.jpg")}
                  />
                
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant=""
                    alt="img"
                   
                    src={require("../images/properties/plumber-r1.jpg")}
                  />
                  </div>
              </Card.Body>
            </Card>
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: "white" }}
          className="d-md-none d-flex justify-content-between align-items-center my-4 features"
        >
          <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4">
        {/* Other content */}
        <div
          style={{ color: "white" }}
          className="d-block d-md-none row justify-content-between align-items-center my-4 mt-lg-5 text-center"
        >
          <div className="col-12 col-md-4 px-md-3 mb-4 mb-md-0">
            <i className="fas fa-toolbox fs-1 d-block mb-2"></i>
            <h5 className="fw-bold mb-0" style={{ color: "white", fontWeight: '700' }}>Expert Team</h5>
            <span style={{ color: "gray", fontWeight: '700' }}>licensed professionals</span>
          </div>
          <div className="col-12 col-md-4 px-md-3 mb-4 mb-md-0">
            <i className="fas fa-handshake fs-1 d-block mb-2"></i>
            <h5 className="fw-bold mb-0" style={{ color: "white", fontWeight: '700' }}>Trustworthy Service</h5>
            <span style={{ color: "gray", fontWeight: '700' }}>customer-first approach</span>
          </div>
          <div className="col-12 col-md-4 px-md-3">
            <i className="fas fa-shower fs-1 d-block mb-2"></i>
            <h5 className="fw-bold mb-0" style={{ color: "white", fontWeight: '700' }}>Latest Solutions</h5>
            <span style={{ color: "gray", fontWeight: '700' }}>modern plumbing technology</span>
          </div>
        </div>

        {/* Other content */}
      </Container>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
