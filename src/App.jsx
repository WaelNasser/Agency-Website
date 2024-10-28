/** @format */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Achevements from "./Components/Achevements";
import Customers from "./Components/Customers";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import LoginPage from "./Components/LoginPage"; // Import Login Page component
import RegisterPage from "./Components/RegisterPage"; // Import Register Page component

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Keep your existing sections under "/" */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Service />
              <About />
              <Achevements />
              <Product />
              <Customers />
              <Testimonials />
              <Faq />
            </>
          }
        />
        {/* Login and Register routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
