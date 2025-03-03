"use client";

import { motion } from "framer-motion";

const Sandbox = () => {
  return (
    <section className="bg-white text-gray-900 py-24 relative">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Two Core Verticals
        </motion.h2>

        {/* Parent Node (Sustains.ai) */}
        <motion.div
          className="bg-[#0ABF53] text-white px-16 py-4 text-xl font-semibold rounded-full shadow-md inline-block mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sustains.ai
        </motion.div>

        {/* Connecting Lines */}
        <div className="relative flex justify-center items-center mt-[-20px]">
          <div className="absolute w-1 bg-gray-300 h-[150px] top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="flex justify-center space-x-20 mt-6">
          <div className="w-24 h-1 bg-gray-300"></div>
          <div className="w-24 h-1 bg-gray-300"></div>
        </div>

        {/* Sandbox & Entropy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Sandbox Section */}
          <motion.div
            className="relative bg-[#F8F9FA] p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <i className="bi-lightbulb text-5xl text-[#0ABF53]"></i>
            </motion.div>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-gray-900">Sandbox – Where Finance Meets Strategy</span>
              <br />Sandbox empowers financial experts to see beyond numbers, offering tools that unravel market complexities and unlock sustainable growth.
            </p>
          </motion.div>

          {/* Entropy Section */}
          <motion.div
            className="relative bg-[#F8F9FA] p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <i className="bi-graph-up-arrow text-5xl text-[#0ABF53]"></i>
            </motion.div>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-gray-900">Entropy – Energizing Tomorrow</span>
              <br />Entropy drives innovation in the energy sector, merging AI with expertise to mitigate risks and foster efficient, sustainable energy solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Sandbox;
