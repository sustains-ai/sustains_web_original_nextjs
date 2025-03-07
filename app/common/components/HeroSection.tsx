"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Added missing import

const HeroSection = () => {
  return (
      <section className="relative bg-gradient-to-br from-[#E6F4EA] via-[#A5D6A7] to-[#FFFFFF] text-gray-800 py-24 md:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ABF5320_0%,transparent_50%)] pointer-events-none" />
        <motion.div
            className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-[#0ABF53] rounded-full opacity-10 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
            className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-[#089B45] rounded-full opacity-10 blur-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center px-6 relative z-10">
          {/* Left Column - Text Content */}
          <motion.div
              className="text-center md:text-left md:pl-8 lg:pl-0 mt-12 md:mt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-md"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
              Sustainable Decisions
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53]">
              Powered by Data
            </span>
            </motion.h1>

            <motion.p
                className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
              AI-Driven Analytics for a Greener, Smarter Future
            </motion.p>

            <motion.div
                className="mt-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <button className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#0ABF53] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#089B45] hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <span className="relative z-10">Schedule a Meeting</span>
                  <ChevronRight className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#089B45] to-[#0ABF53] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
              className="relative flex justify-center mt-16 md:mt-0 md:pr-8 lg:pr-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Main Hero Image */}
            <div className="relative w-full max-w-[700px] h-[400px] md:h-[500px] rounded-xl shadow-2xl overflow-hidden group">
              <Image
                  src="/img/950x950/Hero_1.jpg"
                  alt="Sustainable Analytics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent" />
              <motion.div
                  className="absolute inset-0 bg-[#0ABF53] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
              />
            </div>

            {/* Decorative SVG - Bottom Right */}
            <motion.div
                className="absolute bottom-[-60px] right-[-80px] opacity-40 z-0"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 0.4, rotate: 0 }}
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
        </div>
      </section>
  );
};

export default HeroSection;