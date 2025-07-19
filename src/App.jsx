// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./components/AboutHeroSection";
import Home from "./pages/Home";
import FoundingTeamSection from "./components/FoundingTeamSection";
import BlogsPage from "./components/Blogs";
import CareersPage from "./components/Career";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
import TermConditions from "./components/Term&Conditions";
import Products from "./pages/products";
import WhatsappButton from "./components/WhatsappButton";
import ChatBotWidget from "./components/ChatBoat";
import Support from "./components/Support";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<FoundingTeamSection />} />
        <Route path="/join" element={<FoundingTeamSection />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermConditions />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <WhatsappButton />
      <ChatBotWidget />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
