"use client";
import { motion } from "framer-motion";

const riskMeasures = ["MAD", "Standard Deviation", "VaR", "CVaR", "Entropic Risk Measure"];

const RiskMeasures = () => {
  return (
    <div className="bg-[#E6F4EC] p-10 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] mb-12">
      <h3 className="text-3xl font-semibold text-gray-800">Risk Measures Used in Market Risk</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 text-lg font-medium">
        {riskMeasures.map((measure, index) => (
          <motion.div
            key={index}
            className="bg-white py-3 px-6 rounded-lg shadow-md text-gray-800 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {measure}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RiskMeasures;
