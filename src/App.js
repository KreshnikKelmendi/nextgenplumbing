// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import HomePage from "./components/FullPages/HomePage";

import { motion } from "framer-motion";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";
import AboutUsPage from "./components/FullPages/AboutUsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
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
          </Routes>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
