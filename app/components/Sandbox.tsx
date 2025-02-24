"use client";

import { motion } from "framer-motion";

const Sandbox = () => {
  return (
    <section className="bg-white text-gray-900 py-24"> {/* Increased height */}
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Two Core Verticals
        </motion.h2>

        {/* Branching Structure */}
        <div className="relative flex flex-col items-center">
          {/* Sustains.ai Parent Node (Positioned Higher) */}
          <motion.div
            className="bg-[#0ABF53] text-white px-20 py-4 text-lg font-bold rounded-full shadow-lg mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sustains.ai
          </motion.div>

          {/* Extended Central Line */}
          <div className="absolute w-1 bg-gray-300 h-[180px] top-20 left-1/2 transform -translate-x-1/2"></div>

          {/* Connecting Lines */}
          <div className="flex items-center justify-center space-x-24 mt-10">
            <div className="w-24 h-1 bg-gray-300"></div>
            <div className="w-24 h-1 bg-gray-300"></div>
          </div>

          {/* Sandbox & Entropy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
            {/* Sandbox Section */}
            <motion.div
              className="bg-[#E6F4EC] p-10 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105"
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
              <p className="text-lg text-gray-800">
                <span className="font-bold">Sandbox – Where Finance Meets Strategy</span>
                <br />Sandbox empowers financial experts to see beyond numbers, offering tools that unravel market complexities and unlock sustainable growth.
              </p>
            </motion.div>

            {/* Entropy Section */}
            <motion.div
              className="bg-[#E3F2E9] p-10 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105"
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
              <p className="text-lg text-gray-800">
                <span className="font-bold">Entropy – Energizing Tomorrow</span>
                <br />Entropy drives innovation in the energy sector, merging AI with expertise to mitigate risks and foster efficient, sustainable energy solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Sandbox;
