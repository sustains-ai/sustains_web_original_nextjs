"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const typedStrings = [
  "It all began on Friday evenings in a cozy coffee shop...",
  "A group of portfolio analysis enthusiasts gathered to share lively discussions...",
  "We explored quantitative strategies, market trends, and world economics...",
  "Often sprinkled with a dash of office gossip and the inevitable boss banter...",
  "These debates sparked a dream—to create a firm dedicated to portfolio analytics...",
  "One Friday, that dream turned into a reality, and sustains.ai was born."
];

const ANoteFromHeart = () => {
  const [storedLines, setStoredLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typedStrings.length) {
      const timer = setTimeout(() => {
        setStoredLines((prev) => [...prev, typedStrings[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 3000); // Delay for storing each line
      return () => clearTimeout(timer);
    } else {
      // Reset after last sentence is stored
      setTimeout(() => {
        setStoredLines([]);
        setCurrentIndex(0);
      }, 5000);
    }
  }, [currentIndex]);

  return (
    <section className="bg-white text-gray-900 py-5">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Typing Effect */}
        <div className="text-left text-lg text-gray-700 font-medium">
          <ReactTyped
            strings={[typedStrings[currentIndex] || ""]}
            typeSpeed={30} // Slow typing speed
            backSpeed={0} // No backspacing
            backDelay={0}
            loop={false}
            showCursor={false}
          />
        </div>

        {/* Right Side - Accumulated Text */}
        <div className="text-lg text-gray-800 leading-relaxed border-l-4 border-[#0ABF53] pl-6 min-h-[200px]">
          {storedLines.map((line, index) => (
            <p key={index} className="opacity-100 transition-opacity duration-500">
              {line}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ANoteFromHeart;
