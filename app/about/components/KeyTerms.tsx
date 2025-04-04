"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FinancialEdgeTools = [
  "Portfolio Optimization",
  "Risk Simulations (Monte Carlo)",
  "Performance Backtesting",
  "Advanced Optimization",
  "Swarm Intelligence Models",
  "Market State Prediction",
  "Options Pricing (Black-Scholes)",
];

const EnergyFutureAnalytics = [
  "Solar Energy Insights",
  "Project Returns (NPV & IRR)",
  "Power Agreements (PPA/VPPA)",
  "Demand Forecasting",
  "Asset Performance Tracking",
  "Grid Flow Analysis",
  "Smart Energy Systems",
];

const geekyBackgrounds = [
  "/img/finance_math_bg.jpg",
  "/img/energy_equations_bg.jpg",
];

const KeyTerms = () => {
  const [bgImage, setBgImage] = useState(geekyBackgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) =>
          prev === geekyBackgrounds[0] ? geekyBackgrounds[1] : geekyBackgrounds[0]
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
      <section className="relative py-24 text-gray-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Base Layer */}
          <div className="absolute inset-0 bg-gray-100/90" />
          {/* Geeky Images */}
          <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              key={bgImage} // Forces re-render for smooth fade
          />
        </div>

        {/* Section Title */}
        <motion.h2
            className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-[#0ABF53] mb-16 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
          Powering Decisions with Precision
        </motion.h2>

        {/* Grid Layout */}
        <div className="relative z-10 sm:container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Financial Edge Tools */}
          <motion.div
              className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] text-center transition-all duration-300 hover:shadow-3xl hover:border-[#089B45] hover:bg-white/95"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(10, 191, 83, 0.2)" }}
          >
            <h3 className="text-3xl font-bold text-[#0ABF53] mb-6 drop-shadow-md">
              Financial Edge Tools
            </h3>
            <ul className="space-y-4 text-lg text-gray-800">
              {FinancialEdgeTools.map((term, index) => (
                  <motion.li
                      key={index}
                      className="flex items-center justify-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-[#0ABF53] font-bold text-xl">→</span>
                    <span>{term}</span>
                  </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Energy Future Analytics */}
          <motion.div
              className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl border-t-4 border-[#0ABF53] text-center transition-all duration-300 hover:shadow-3xl hover:border-[#089B45] hover:bg-white/95"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(10, 191, 83, 0.2)" }}
          >
            <h3 className="text-3xl font-bold text-[#0ABF53] mb-6 drop-shadow-md">
              Energy Future Analytics
            </h3>
            <ul className="space-y-4 text-lg text-gray-800">
              {EnergyFutureAnalytics.map((term, index) => (
                  <motion.li
                      key={index}
                      className="flex items-center justify-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-[#0ABF53] font-bold text-xl">→</span>
                    <span>{term}</span>
                  </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
  );
};

export default KeyTerms;