"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white text-black py-24 relative">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Column - Text Content (Moved More Left) */}
        <div className="text-center md:text-left px-6 mt-20 md:-ml-24">
          <motion.h1
              className="text-5xl font-extrabold text-dark leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
          >
            Sustainable decisions. <br /> Smarter risk strategies.
            <span className="text-[#0ABF53]"> Powered by data.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            AI-Driven Analytics for Sustainable Growth & Risk Intelligence
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              className="bg-[#0ABF53] text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-green-500 transition"
              href="#"
            >
              Schedule a meeting
            </a>
          </motion.div>
        </div>

        {/* Right Column - Hero Images (Moved More Right) */}
        <motion.div
          className="relative flex justify-center mt-20 md:mr-10"
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

          {/* Decorative SVG - Bottom Right */}
          <motion.div
            className="absolute bottom-[-80px] right-[-100px] opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src="/svg/components/curved-shape.svg"
              alt="Decorative SVG"
              width={160}
              height={160}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
