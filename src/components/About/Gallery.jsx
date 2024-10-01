import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';

// Import images from the local file system
import image1 from '../../images/properties/IMG_2317 (1).jpg';
import image2 from '../../images/properties/Bar.jpg';
import image3 from "../../images/properties/download (1).jpg"
import image4 from "../../images/properties/IMG_1465 (1).jpg"
import image5 from "../../images/properties/IMG_1582 (1).jpg"
import image6 from "../../images/properties/IMG_2708 (1).png"
import image7 from "../../images/properties/IMG_2580 (1).jpg"
import image8 from "../../images/properties/IMG_4513.jpg"
import image9 from "../../images/properties/Island.jpg"
import image10 from "../../images/properties/IMG_4521.jpg"


const Gallery = () => {
  // Define responsive settings for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Example images for the carousel (imported from local files)
  const images = [
    {
      image: image1
    },
    {
      image: image2
    },
    {
      image: image3
    },
    {
      image: image4
    },
    {
      image: image5
    }
    ,
    {image: image6},
    {image: image7},
    {image: image8},
    {image: image9},
    {image: image10}
  ];

  return (
    <div className="bg-light">
      <Container className="bg-light">
        <h2 className="">Gallery</h2>
        <Carousel 
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          pauseOnHover={false}
          showDots={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '55vh', paddingLeft: '5px', objectFit: "cover", margin: "30px", borderRadius: "15px" }} />
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Gallery;
