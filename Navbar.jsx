// Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const sectionIds = {
  Home: "home",
  About: "about",
  Courses: "courses",
  "Contact Us": "contact"
};

  const navVariants = {
    hidden: { y: -90, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.1, 
      color: "#ffffff",
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 w-full text-white bg-[#1a365d] shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="ml-2 text-xl font-bold text-white">Bangalore  Academic</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-white font-bold text-lg">
            {["Home", "About", "Courses", "Contact Us"].map((item) => (
              <motion.a
                key={item}
                href={`#${sectionIds[item]}`}
                variants={linkVariants}
                whileHover="hover"
                className="text-gray-200 hover:text-white font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "About", "Courses", "Contact Us"].map((item) => (
              <motion.a
                key={item}
                href={item === "Home" ? "#home" : `#${item.toLowerCase().replace(" ", "")}`}
                whileHover={{ scale: 1.05 }}
                className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-[#234578]"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
