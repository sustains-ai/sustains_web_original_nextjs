"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroThoughts = () => {
  return (
    <section className="bg-white text-black py-24 relative">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Column - Text Content */}
        <div className="text-center md:text-left px-6">
          <motion.h1
            className="text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Exploring ideas <br /> that drive change.
            <span className="text-[#0ABF53]"> We think beyond limits.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Our research goes deep into finance, energy, and sustainability—turning thoughts into impact.
          </motion.p>

          {/*<motion.div*/}
          {/*  className="mt-8"*/}
          {/*  initial={{ opacity: 0, scale: 0.9 }}*/}
          {/*  animate={{ opacity: 1, scale: 1 }}*/}
          {/*  transition={{ duration: 0.5, delay: 0.6 }}*/}
          {/*>*/}
          {/*  <a*/}
          {/*    className="bg-[#0ABF53] text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-green-500 transition"*/}
          {/*    href="#"*/}
          {/*  >*/}
          {/*    Learn More*/}
          {/*  </a>*/}
          {/*</motion.div>*/}
        </div>

        {/* Right Column - Image */}
        <motion.div
          className="relative flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            className="rounded-lg shadow-lg"
            src="/img/950x950/equity_research.jpg"
            alt="Innovation & Research"
            width={500}
            height={600}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroThoughts;
