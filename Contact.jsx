import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#1a365d] mb-6"
        >
          Contact Us
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Have any questions, suggestions, or want to enroll in our courses?  
          Fill out the form below or reach us directly through email/phone.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
            />
          </div>
          <textarea 
            rows="5" 
            placeholder="Your Message" 
            className="w-full mt-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
          ></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-[#1a365d] text-white font-semibold rounded-lg shadow-md hover:bg-[#234578] transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-10 text-gray-700">
          <p><strong>Email:</strong> support@eduhub.com</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Address:</strong> Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
