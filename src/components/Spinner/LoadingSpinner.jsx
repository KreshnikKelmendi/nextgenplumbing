import React from "react";
import { motion } from "framer-motion";
import logoImage from "../../images/logo/next-gen.png";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay d-flex justify-content-center align-items-center">
      <div className="loader d-flex align-items-center">
        <motion.div
          className="spinner mr-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* Placeholder for spinner animation */}
        </motion.div>
      </div>
      <div className="ml-4 kiki">
        <img src={logoImage} alt="Loading spinner" style={{ objectFit: 'contain', width: '120px', height: '120px' }} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
