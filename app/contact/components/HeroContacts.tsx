"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroSection = () => {
  // Ensure component is rendered only after hydration
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevent SSR mismatches
  }

  return (
    <section className="text-black mt-5 p-5 relative">
      <motion.div
        className="sm:container mx-auto grid grid-cols-1 md:grid-cols-2 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Column - Text Content */}
        <div className="text-center md:text-left px-0 mt-20">
          <motion.h1
            className="text-5xl font-extrabold text-dark leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
             Get in Touch <br /> We would love to hear from you.
            <span className="text-[#0ABF53]"> Feel free to reach out.</span>
          </motion.h1>
        </div>

        {/* Right Column - Hero Images */}
        <motion.div
          className="relative flex justify-center mt-20 md:pr-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Hero Image */}
          <Image
            className="rounded-lg shadow-lg z-10"
            src="/img/950x950/img4.jpg"
            alt="Risk Analysis"
            width={500}
            height={500}
            priority // Fast Loading
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
