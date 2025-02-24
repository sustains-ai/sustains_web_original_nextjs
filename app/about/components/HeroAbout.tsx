"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Lottie to disable SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/public/animations/team.json"; // Ensure the path is correct

const HeroAbout = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 pt-[200px]"> {/* Adjusted padding-top */}
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Simplifying Complexity,
            <span className="text-[#A8E6CF]"> Unlocking Possibilities.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We are a team of passionate individuals who love crunching numbers—not all of us!
            Our gang includes hardcore designers, deep thinkers, and data-driven strategists, all united
            by a common goal: simplifying complex problems in finance and energy into actionable insights
            and innovative solutions.
          </motion.p>

          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Beyond work, we are still those old college dreamers, fueled by big ideas,
            late-night debates, and endless curiosity. The common thread? An obsession with
            problem-solving and a drive to create impact.
          </motion.p>
        </div>

        {/* Right Side - Lottie Animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Lottie animationData={animationData} loop={true} className="w-full max-w-md" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
