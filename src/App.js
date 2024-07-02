import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Properties from "./pages/Properties";
import HomePage from "./components/FullPages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
        {/* <Loading /> */}
        {/* <Developers /> */}
        {/* <Properties /> */}
      
        {/* <AboutUs /> */}
        {/* <Join /> */}
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
