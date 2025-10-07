import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + About */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">BANGLORE PROJECT</h2>
          <p className="mt-3 text-gray-300">
            Banglore Academic is an academic learning platform designed to help students master 
            skills like Web Development, Programming, and beyond.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
          <p className="text-gray-300">📧 support@eduhub.com</p>
          <p className="text-gray-300">📞 +92 300 1234567</p>
          <p className="text-gray-300">📍 Lahore, Pakistan</p>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-10 border-t border-gray-500 pt-4 text-center text-gray-400"
      >
        <p>© {new Date().getFullYear()} Banglore. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
