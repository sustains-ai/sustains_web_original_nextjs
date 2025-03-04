"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RiskTerms = [
  "Efficient Frontier & Portfolio Analysis",
  "Monte Carlo Analysis",
  "Back Testing",
  "Optimization Models",
  "Particle Swarm Optimization",
  "Hidden Markov Models",
  "Black-Scholes Model",
];

const SustainabilityTerms = [
  "Solar Irradiation",
  "NPV & IRR",
  "PPA & VPPA",
  "Electricity Load Demand Forecast",
  "Energy Asset Management",
  "Load Flow Analysis",
  "Smart Grid Analytics",
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
    <section
      className="relative py-24 text-gray-900 transition-all duration-1000 ease-in-out bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Section Title */}
      <motion.h2
        className="relative z-10 text-4xl font-extrabold text-center text-[#0ABF53] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What We Explore
      </motion.h2>

      {/* Grid Layout */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Finance Team (Sandbox) */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#0ABF53]">
            Risk Research Topics
          </h3>
          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            {RiskTerms.map((term, index) => (
              <li key={index} className="flex items-center justify-center space-x-2">
                <span className="text-[#0ABF53]">✔</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Energy Team (Entropy) */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#0ABF53]">
            Sustainability Research Topics
          </h3>
          <ul className="mt-4 space-y-2 text-lg text-gray-800">
            {SustainabilityTerms.map((term, index) => (
              <li key={index} className="flex items-center justify-center space-x-2">
                <span className="text-[#0ABF53]">✔</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyTerms;
