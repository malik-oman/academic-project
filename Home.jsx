import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/logo.jpg'

const Hero = () => {





  return (
    <section id="home" className="bg-[#1a365d] text-white py-20 px-6 md:px-12 mt-17 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
            🎓 Welcome to <br /> Bangalore Club Academic Projects
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
            Showcasing student innovation, research, and creative web projects
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The Bangalore Club Academic portal is designed to highlight and
            document outstanding academic projects created by students. Our
            mission is to encourage innovation, collaboration, and learning
            through project-based experiences. Explore cutting-edge web
            development, digital logic, AI, and management projects that reflect
            creativity and practical knowledge.
          </p>

          <div className="flex gap-4">
           
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white hover:bg-gray-200 text-[#1a365d] font-semibold px-6 py-3 rounded-2xl shadow-lg mb-2.5"
            >
              <a href="#contact"> 📩 Contact Us</a>
             
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src={logo} // <-- yahan apni academic wali image ka path dalna
            alt="Academic Project"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </div>

           <section className="py-12 bg-[#1e3a8a]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "50+", text: "Academic Projects" },
            { num: "200+", text: "Students Involved" },
            { num: "10+", text: "Awards Won" },
            { num: "15+", text: "Collaborations" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="bg-white/10 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-yellow-400">{item.num}</h3>
              <p className="mt-2 text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>


        <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Why Choose Our Academic Projects?
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "💡 Innovation First", desc: "Encourage creative solutions" },
              { title: "📖 Knowledge Sharing", desc: "Learn from peers and mentors" },
              { title: "🌐 Modern Tech", desc: "React, Tailwind, AI, DBMS projects" },
              { title: "🤝 Collaboration", desc: "Work together, grow together" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
                className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
              >
                <h3 className="text-xl font-semibold text-yellow-400">{item.title}</h3>
                <p className="mt-3 text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


         
      
    
     

    </section>

       
 

  );
};

export default Hero;
