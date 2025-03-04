"use client";

import { motion } from "framer-motion";


const HeroAbout = () => {
  return (
    <section className="bg-white text-black py-24 pt-[160px] relative overflow-hidden">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Text Content */}
        <div className="text-left md:ml-[-60px]">
          <motion.h1
            className="text-5xl font-extrabold leading-tight tracking-tight md:pr-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Simplifying Complexity,
            <span className="text-[#0ABF53]"> Unlocking Possibilities.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We transform complex challenges into actionable insights and innovative solutions, all with sustainability at the core

          </motion.p>

          <motion.p
            className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Beyond work, we are still those old college dreamers, fueled by big ideas,
            late-night debates, and endless curiosity. The common thread? An obsession with
            problem-solving and a drive to create impact.
          </motion.p>
        </div>

        {/* Right Side - Updated Hero Image */}
        <motion.div
          className="relative flex justify-center md:mr-[-60px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            className="rounded-lg shadow-xl z-10 w-[550px] h-auto"
            // className="relative flex justify-center mt-20 md:mr-10"
            src="/img/950x950/img5.jpg"
            alt="Our Team"
            width={500}
            height={500}
          />

          {/* Decorative SVG - Positioned Bottom Right */}
          <motion.div
            className="absolute bottom-[-80px] right-[-80px] opacity-30 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              src="/svg/illustrations/star-half.svg"
              alt="Decorative SVG"
              width={180}
              height={180}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroAbout;
