import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import google from "../../images/properties/search.png";
import AnimationTitles from '../functions/AnimationTitles';

const testimonialsData = [
  {
    name: 'Laura Martinez',
    position: 'Homeowner',
    text: 'Nextgen Plumbing is incredible! They responded promptly to my call when my kitchen sink was leaking. The technicians were polite, professional, and very efficient. They fixed the problem quickly, and I haven’t had an issue since. Highly recommend!',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    position: 'Small Business Owner',
    text: 'We had a major plumbing issue at our office, and Nextgen Plumbing saved the day! Their team worked through the night to get everything repaired. They were quick, reliable, and charged a fair price for such urgent work. Excellent service!',
    rating: 5
  },
  {
    name: 'Emily Davis',
    position: 'Property Manager',
    text: 'As a property manager, I rely on contractors to get the job done right. Nextgen Plumbing has been my go-to for all our plumbing needs. They consistently deliver top-notch service, and their customer support is fantastic!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className=" bg-light">
      <Container>
        <AnimationTitles className="mb-5" title="What Our Clients Say" />
        <Row className="justify-content-center">
          <Col md={12}>
            <Carousel>
              {testimonialsData.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="text-center shadow-sm mb-4 testimonial-card">
                    <Card.Body>
                      <Card.Text>
                        {testimonial.text}
                      </Card.Text>
                      <div className="client-info">
                        <div className="star-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="star"></span>
                          ))}
                        </div>
                        <h5>{testimonial.name}</h5>
                        <p className="text-muted">{testimonial.position}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        
        <div className="google-reviews-button text-center">
          <button className="btn btn-dark d-inline-flex align-items-center" onClick={() => window.open('https://g.co/kgs/DcnuJQP', '_blank')}>
            <img src={google} alt='' className="google-icon" style={{width: '18px', height: '18px', marginRight: '5px'}} />
            <span>SEE OUR GOOGLE REVIEWS</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
