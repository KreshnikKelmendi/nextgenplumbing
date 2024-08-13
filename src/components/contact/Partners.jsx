import React from 'react';
import image1 from '../../images/partners/KohlerLogoImage.png';
import image2 from "../../images/partners/delta.png"
import image3 from "../../images/partners/navien.png"
import image4 from "../../images/partners/insinkerator.png"

// Array of image URLs
const imageSources = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
 
  // Add more image objects here if needed
];

const Partners = () => {
  return (
    <div className="partners-container bg-light py-12 pt-5">
      <div className="partners-row flex justify-center">
        <div className="partners-inner-container rounded-lg bg-light p-8">
          <h1 className="partners-heading text-center text-3xl font-bold mb-8 text-blue-900">Few Trusted Brands We Partner With</h1>
          <div className="partners-slider">
            {imageSources.map((item, index) => (
              <div className="partners-logos flex justify-center items-center p-4 rounded-md hover:shadow-md transition-shadow duration-300" key={index}>
                <img src={item.image} alt={`Partner ${index + 1}`} style={{width: "147px", height: "auto"}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
