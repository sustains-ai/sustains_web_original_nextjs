"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

// Dynamically import Lottie to prevent SSR errors
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Form = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch("/animations/contact.json"); // Ensure this file exists
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };

    fetchAnimation();
  }, []);

  return (
    <main className="relative text-black p-5">
      <motion.div
        className="sm:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Column - Office Info */}
        <div>
          <motion.h3
            className="text-4xl font-extrabold text-[#0ABF53]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our Office
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              className="rounded-lg mt-4 shadow-xl"
              src="/img/580x480/img1.jpg"
              alt="Sustainability-Driven Insights"
              width={500}
              height={500}
            />
          </motion.div>

          <motion.address
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="block font-semibold text-[#0ABF53] text-xl">Bengaluru:</span>
            #23, CJ Ventatadas Road <br />
            Padmanabhanagar <br />
            Bengaluru
          </motion.address>
        </div>

        {/* Right Column - Contact Form & Lottie Animation */}
        <motion.div
          className="bg-white shadow-xl rounded-lg p-4 border border-gray-200 relative flex flex-col items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Lottie Animation for Mailing Effect */}
          <motion.div
            className="flex justify-center items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {animationData ? (
              <Lottie animationData={animationData} loop={true} className="w-[200px] h-[200px]" />
            ) : (
              <p>Loading animation...</p>
            )}
          </motion.div>

          <h4 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h4>
          <form className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-md"
                  placeholder="Jacob"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-md"
                  placeholder="Williams"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Work Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-md"
                  placeholder="email@site.com"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-md"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="w-full bg-[#0ABF53] text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">
                Send Inquiry
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Form;
