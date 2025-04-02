"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Team Data
const teamSection = [
  {
    name: "Aswin Nambiar",
    role: "CEO",
    image: "/img/350x350/aswin2.png",
    bio: "Our Chief Entertaining Officer. He talks—a lot. Conversations range from product strategies to deep spiritual insights, though there is ongoing debate about how spiritual he truly is. A relentless extrovert, he thrives on social interactions and energizes every discussion he joins."  },
  {
    name: "Sachin Muralee Krishna",
    role: "CFO",
    image: "/img/350x350/sachin3.png",
    bio: "Our budding CFO. Loves finance and hangovers in equal measure. Equally passionate about spreadsheets and sweets. Rarely speaks—unless fueled by a drink. Eligible bachelor, for now."
  },
  {
    name: "Arjun C Unni",
    role: "Head of products",
    image: "/img/350x350/arjun2.jpg",
    bio: "A product guy turned developer turned energy professional turned finance guy. Holds a PhD in energy, loves coding, and might just end up as the CTO. A devoted fan of JETBRAINS products."
  },
];

const TeamSection = () => {
  const [index, setIndex] = useState(0);

  // Handle Next
  const nextMember = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamSection.length);
  };

  // Handle Previous
  const prevMember = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? teamSection.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto text-center px-6 relative">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Team
        </motion.h2>

        {/* Carousel Wrapper */}
        <div className="relative w-full max-w-md mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={teamSection[index].name}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl text-center border-t-4 border-[#0ABF53]"
            >
              {/* Team Image */}
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-full shadow-md">
                <Image
                  src={teamSection[index].image}
                  alt={teamSection[index].name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Team Info */}
              <h5 className="text-2xl font-semibold text-gray-900 mt-4">
                {teamSection[index].name}
              </h5>
              <span className="text-gray-600">{teamSection[index].role}</span>
              <p className="text-gray-700 mt-3 text-sm">
                {teamSection[index].bio}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevMember}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
          >
            ◀
          </button>
          <button
            onClick={nextMember}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
