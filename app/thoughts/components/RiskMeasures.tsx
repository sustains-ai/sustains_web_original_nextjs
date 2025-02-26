"use client";
import { motion } from "framer-motion";

const riskMeasures = [
  "MAD",
  "Standard Deviation",
  "VaR",
  "CVaR",
  "Entropic Risk Measure",
];

const RiskMeasures = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#F3F8F6] to-[#E6F4EC]">
      <div className="container mx-auto text-center px-6">
        {/* Title */}
        <motion.h3
          className="text-4xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Risk Measures in Market Risk
        </motion.h3>

        {/* Grid of Risk Measures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {riskMeasures.map((measure, index) => (
            <motion.div
              key={index}
              className="relative bg-white bg-opacity-80 backdrop-blur-lg border border-[#0ABF53] py-4 px-6 rounded-lg shadow-xl text-gray-800 font-medium text-lg transition-all hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {measure}
              {/* Floating Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-[#0ABF53] opacity-0 rounded-lg blur-xl"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskMeasures;
