import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import google from "../../images/properties/search.png";
import AnimationTitles from '../functions/AnimationTitles';


const testimonialsData = [
  {
    name: 'John Doe',
    position: 'CEO, Example Company',
    text: 'Nextgen Plumbing has been amazing to work with! They are always so responsive and accommodating. Every interaction with them is professional and they go above and beyond to assist us! It has been a pleasure having them as a vendor and we definitely recommend them to others!”',
    rating: 5
  },
  {
    name: 'Jane Smith',
    position: 'CTO, Another Company',
    text: 'Vestibulum et magna ac ex vehicula consequat vel eu nulla. Mauris sit amet metus et nulla suscipit maximus.',
    rating: 5
  },
  {
    name: 'Michael Brown',
    position: 'COO, Yet Another Company',
    text: 'Aenean nec nunc nec dolor blandit faucibus. Duis euismod est nec maximus luctus. Integer in quam in turpis mattis vehicula.',
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
