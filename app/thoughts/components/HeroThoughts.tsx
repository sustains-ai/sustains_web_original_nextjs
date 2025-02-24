"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie to prevent SSR errors
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HeroThoughts = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch("/animations/thoughts.json"); // Ensure the correct path
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    fetchAnimation();
  }, []);

  return (
    <section className="bg-[#0A0A0A] text-white py-24 mt-16">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Column - Text Content */}
        <div className="text-center md:text-left px-6">
          <motion.h1
            className="text-5xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Exploring ideas <br /> that drive change.
            <span className="text-[#A8E6CF]"> We think beyond limits.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Our research goes deep into finance, energy, and sustainability—turning thoughts into impact.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              className="bg-[#6BAA75] text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-green-500 transition"
              href="#"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Right Column - Lottie Animation (No Frame) */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {animationData ? (
            <Lottie animationData={animationData} loop={true} className="w-[500px] h-[350px]" />
          ) : (
            <p>Loading animation...</p> // Display until animation loads
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroThoughts;
