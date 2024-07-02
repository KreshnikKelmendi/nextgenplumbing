import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Properties from "./pages/Properties";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Loading />
        {/* <Developers /> */}
        {/* <Properties /> */}
      
        <AboutUs />
        <Join />
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
