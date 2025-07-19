import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
    { path: "/blogs", label: "Blogs" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#007BFF] to-[#10B981] shadow-lg sticky top-0 z-50 font-sans text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[100px] flex justify-between items-center py-4">
        {/* ✅ Logo + Title */}
        <Link to="/" className="flex items-center cursor-pointer">
          <div className="flex flex-col items-center justify-center relative">
            <img
              src={logo}
              alt="MediCAPS Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="text-yellow-300 text-[10px] leading-none mt-[-1px] font-semibold tracking-wider">
              MediCAPS
            </span>
          </div>
          <div className="leading-tight ml-1">
            <span className="text-white font-extrabold text-[20px]">
              MediCAPS
            </span>
          </div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 ml-auto">
          <nav className="flex items-center space-x-6 text-[15px] font-medium text-white">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `transition duration-200 text-[1.05rem] ${
                    isActive
                      ? "underline underline-offset-4"
                      : "hover:text-gray-900"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ✅ CTA Button */}
          <Link to="/join">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#002f5e",
                borderRadius: "9999px",
                textTransform: "none",
                px: "22px",
                py: "6px",
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "inherit",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#01426e",
                  boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              Join Now
            </Button>
          </Link>
        </div>

        {/* ✅ Mobile Menu Toggle Button */}
        <div className="md:hidden cursor-pointer">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#007BFF] text-white px-6 py-4 space-y-4">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium ${
                  isActive
                    ? "underline underline-offset-4"
                    : "hover:text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* CTA on mobile */}
          <Link to="/join" onClick={() => setIsMenuOpen(false)}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#002f5e",
                borderRadius: "9999px",
                textTransform: "none",
                px: "22px",
                py: "6px",
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "inherit",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#01426e",
                  boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              Join Now
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
