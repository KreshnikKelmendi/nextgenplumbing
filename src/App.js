// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import HomePage from "./components/FullPages/HomePage";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";
import AboutUsPage from "./components/FullPages/AboutUsPage";
import Banner from "./components/banner/Banner";
import ServicesPage from "./components/FullPages/ServicesPage";
import ContactPage from "./components/FullPages/ContactPage";
import PlumbingServices from "./components/FullPages/PlumbingServices";
import RadiantHeating from "./components/FullPages/RadiantHeating";
import GasPiping from "./components/FullPages/GasPiping";
import WaterTreatment from "./components/FullPages/WaterTreatment";
import AllPlumbing from "./components/FullPages/AllPlumbing";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  const BackToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    return (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "10px",
          padding: "10px 15px",
          borderRadius: "10%",
          backgroundColor: "#000e5d",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          fontSize: "18px",
          display: "none" // Hide by default, show on scroll
        }}
        id="back-to-top-button"
      >
        ↑
      </button>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("back-to-top-button");
      if (window.scrollY > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/plumbing-services" element={<PlumbingServices />} />
            <Route path="/radiant-heating" element={<RadiantHeating />} />
            <Route path="/gas-piping&testing-services" element={<GasPiping />} />
            <Route path="/water-heaters&water-treatment" element={<WaterTreatment />} />
          </Routes>
        )}
        <Banner />
        <Footer />
        <BackToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;
