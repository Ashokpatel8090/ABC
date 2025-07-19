import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#007BFF] to-[#10B981] text-white px-6 md:px-20 py-8 relative font-sans text-center">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-base md:text-lg leading-relaxed mb-2">
          © 2025 MediCAPS — Your Personal Health & Longevity Companion
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Built with <span role="img" aria-label="heart">❤️</span> by IDCONS Technova Private Limited.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-2">
          Phone: <a href="tel:+919870263399" className="hover:underline">+91 9870263399</a>
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Technova HQ, GL-7, Ashoka Estate Building, Barakhamba Road, Connaught Place, New Delhi – 110001
        </p>

        {/* Legal and Support Links */}
        <div className="flex justify-center gap-6 text-sm md:text-base font-medium">
          <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy & Policy</Link>
          <Link to="/support" className="hover:underline">Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
