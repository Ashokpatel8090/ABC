// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
// ...other imports

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
