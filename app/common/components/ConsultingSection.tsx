"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const consultingAreas = [
  "Electricity Demand Forecasting",
  "EV Sales Analysis & Projections",
  "Energy Optimization & Grid Stability",
  "Renewable Energy Resource Planning",
  "PPA & VPPA Contract Analysis",
  "Battery Storage & Energy Arbitrage",
  "Smart Grid Analytics & Load Flow Analysis",
  "Carbon Market & Emissions Trading",
  "Hydrogen & Alternative Fuels Research",
  "AI-Driven Energy Risk Assessments",
];

const ConsultingSection = () => {
  return (
      <section className="relative py-24 bg-gray-50 text-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Consulting Image */}
          <motion.div
              className="relative w-full lg:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
          >
            <Image
                src="/images/consulting.jpg"
                alt="Consulting Services"
                layout="fill"
                className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Right Side - Consulting Details */}
          <motion.div
              className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#0ABF53]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Expert Energy & Sustainability Consulting
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide specialized consulting services in energy and sustainability. Our expertise includes AI-driven
              analytics, forecasting, and optimization solutions tailored for businesses.
            </p>

            {/* Consulting Areas */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {consultingAreas.map((area, index) => (
                  <motion.li
                      key={index}
                      className="flex items-center space-x-3 bg-gray-100 p-3 rounded-md shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className="text-[#0ABF53]" size={20} />
                    <span>{area}</span>
                  </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
  );
};

export default ConsultingSection;
