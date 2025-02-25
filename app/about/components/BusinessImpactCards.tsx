"use client";
import { motion } from "framer-motion";

const BusinessImpactCards = () => {
  return (
    <section className="bg-white-100 text-gray-900 py-24 text-center">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Performance
        </motion.h2>

        {/* Business Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { number: "3", text: "Active business partners using Sandbox" },
            { number: "2", text: "Business partners using Entropy" },
            { number: "10+", text: "Advanced risk models developed" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-bold text-[#0ABF53]">
                {item.number}
              </h3>
              <p className="text-lg mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactCards;
