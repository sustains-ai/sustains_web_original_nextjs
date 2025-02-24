"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sandboxTerms = [
  "Efficient Frontier & Portfolio Analysis",
  "Monte Carlo Analysis",
  "Back Testing",
  "Optimization Models",
  "Particle Swarm Optimization",
  "Hidden Markov Models",
  "Black-Scholes Model",
];

const entropyTerms = [
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
      className="relative py-24 text-white overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Section Title */}
      <motion.h2
        className="relative z-10 text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What all we explore
      </motion.h2>

      {/* Terms Grid */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Finance Team (Sandbox) */}
        <motion.div
          className="bg-[#1B1B1B] bg-opacity-80 p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#A8E6CF]">
            Key Topics Our Finance Team Explores
          </h3>
          <ul className="mt-4 space-y-2 text-lg">
            {sandboxTerms.map((term, index) => (
              <li key={index} className="text-gray-300">{term}</li>
            ))}
          </ul>
        </motion.div>

        {/* Energy Team (Entropy) */}
        <motion.div
          className="bg-[#141414] bg-opacity-80 p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-[#A8E6CF]">
            Key Topics Our Energy Team Researches
          </h3>
          <ul className="mt-4 space-y-2 text-lg">
            {entropyTerms.map((term, index) => (
              <li key={index} className="text-gray-300">{term}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyTerms;
