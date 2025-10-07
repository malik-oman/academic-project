import React from "react";
import { motion } from "framer-motion";

// Example imports (aap apne image assets ke path use karna)
import course_1 from '../assets/course1.jpg'
import course_2 from "../assets/course2.jpg";
import course_3 from "../assets/course3.jpg";
import class_6 from "../assets/class.jpg"
import picture_1 from '../assets/picture3.jpg'
import cyber_2 from '../assets/cyber1.jpg'
const Courses = () => {
  return (
    <section id="courses" className="py-20 px-6 md:px-12 bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our Popular Courses
        </motion.h2>
        <p className="mt-4 text-gray-300 text-lg">
          Learn modern web development with hands-on projects and practical
          skills. From basics to advanced, we cover everything you need to
          become a professional frontend developer.
        </p>

        {/* Courses Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            <motion.img
              src={course_1}
              alt="HTML Course"
              className="rounded-xl shadow-md w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">HTML Fundamentals</h3>
            <p className="mt-2 text-gray-200">
              Learn the foundation of web development with semantic HTML. Build
              structured and accessible websites from scratch.
            </p>
          </motion.div>

          {/* Course 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.2 }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            <motion.img
              src={course_2}
              alt="CSS Course"
              className="rounded-xl shadow-md w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">CSS Styling & Layouts</h3>
            <p className="mt-2 text-gray-200">
              Master CSS to design responsive, beautiful websites with Flexbox,
              Grid, animations, and modern UI design principles.
            </p>
          </motion.div>

          {/* Course 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4 }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            <motion.img
              src={course_3}
              alt="JavaScript & React Course"
              className="rounded-xl shadow-md w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">JavaScript & React.js</h3>
            <p className="mt-2 text-gray-200">
              Learn JavaScript fundamentals and build interactive UIs with
              React.js. Gain the skills needed to become a frontend developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4 }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            <motion.img
              src={class_6}
              alt="JavaScript & React Course"
              className="rounded-xl shadow-md w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">Mobile App Developments</h3>
            <p className="mt-2 text-gray-200">
             Build Android and iOS apps using Flutter and React Native
            </p>
          </motion.div>
           
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4 }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            <motion.img
              src={picture_1}
              alt="JavaScript & React Course"
              className="rounded-xl shadow-md w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">AI & Machine Learning</h3>
            <p className="mt-2 text-gray-200">
             Understand AI concepts and work on ML projects with hands-on training.
            </p>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.4 }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            <motion.img
              src={cyber_2}
              alt="JavaScript & React Course"
              className="rounded-xl shadow-md w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">Cyber Security</h3>
            <p className="mt-2 text-gray-200">
              Learn ethical hacking, network security, and techniques to protect systems from cyber threats.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Courses;
