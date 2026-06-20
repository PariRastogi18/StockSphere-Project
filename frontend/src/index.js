import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/SignupPage";
import Login from "./landing_page/login/LoginPage";
import About from "./landing_page/about/AboutPage";
import Products from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
