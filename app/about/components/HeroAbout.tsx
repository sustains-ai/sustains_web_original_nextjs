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
            Making Sense of Data,
            <span className="text-[#0ABF53]"> Redefining Portfolios.</span>
          </motion.h1>

          <motion.p
              className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
          >
            We analyze complex financial and energy portfolios, transforming raw data into
            actionable insights that drive smarter decisions. Whether optimizing risk or
            maximizing sustainability, our approach is built for the future.
          </motion.p>

          <motion.p
              className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
          >
            Beyond the algorithms, we are still those college dreamers, fueled by curiosity,
            late-night discussions, and a drive to solve real-world problems. What started
            as a passion for data and strategy is now a mission to help businesses
            navigate uncertainty and build resilient portfolios.
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
            src="/img/950x950/HeroAbout_1.jpg"
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
