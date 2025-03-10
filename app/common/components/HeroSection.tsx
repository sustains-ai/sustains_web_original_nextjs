"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Explicitly import Variants
import { ChevronRight } from "lucide-react";

// Define variants with explicit typing
const slideLeftToRight: Variants = {
  initial: { x: "0%", y: "0%" },
  animate: {
    x: "5%",
    y: "0%",
    transition: {
      duration: 60,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const slideRightToLeft: Variants = {
  initial: { x: "0%", y: "0%" },
  animate: {
    x: "20%",
    y: "0%",
    transition: {
      duration: 35,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const HeroSection = () => {
  return (
      <section className="relative bg-[#FFFFFF] text-gray-800 py-24 md:py-32 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Hero_1.jpg - Left to Right */}
          <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-70"
              variants={slideLeftToRight}
              initial="initial"
              animate="animate"
          >
            <Image
                src="/img/950x950/Hero_1.jpg"
                alt="Sustainable Analytics 1"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ABF53]/10 to-transparent" />
          </motion.div>

          {/* Hero_2.jpg - Right to Left */}
          <motion.div
              className="absolute top-0 left-1/3 w-2/3 h-full opacity-60"
              variants={slideRightToLeft}
              initial="initial"
              animate="animate"
          >
            <Image
                src="/img/950x950/Hero_2.jpg"
                alt="Sustainable Analytics 2"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#089B45]/10 to-transparent" />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[600px] text-center">
          <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
          >
            Maximizing Returns,
            <br />
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53]">
            Minimizing Risk
            <motion.span
                className="absolute left-0 bottom-[-8px] w-full h-1 bg-gradient-to-r from-[#089B45] to-[#0ABF53] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </span>
          </motion.h1>

          <motion.p
              className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
          >
            Cutting-edge portfolio analytics for sustainable growth.
          </motion.p>

          <motion.div
              className="mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <button className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#089B45] to-[#0ABF53] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10">Schedule a Meeting</span>
                <ChevronRight className="w-5 h-5 relative z-10" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0ABF53]/50 to-[#089B45]/50 opacity-0 group-hover:opacity-100 rounded-full"
                    initial={{ scale: 0, x: "50%", y: "50%" }}
                    animate={{ scale: 3, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;