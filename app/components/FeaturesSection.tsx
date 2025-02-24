"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore Our Key Features
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <FeatureCard
          icon="bi-graph-up-arrow"
          title="Precision Risk Analytics"
          description="Leverage cutting-edge tools to assess and mitigate risks with unparalleled accuracy."
          color="from-blue-500 to-indigo-600"
        />
        <FeatureCard
          icon="bi-bar-chart-line"
          title="Quantitative Excellence"
          description="Showcase our expertise in risk modeling, forecasting, and optimization."
          color="from-green-500 to-teal-600"
        />
        <FeatureCard
          icon="bi-briefcase"
          title="Seamless Web Solutions"
          description="User-friendly web platforms and robust API integrations for financial and energy analytics."
          color="from-purple-500 to-pink-600"
        />
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg cursor-pointer overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white opacity-10 blur-2xl"
        animate={{ opacity: hover ? 0.2 : 0.1 }}
      />

      {/* Animated Icon */}
      <motion.i
        className={`${icon} text-5xl mb-4 transition-transform duration-500`}
        animate={{ rotate: hover ? 15 : 0 }}
      ></motion.i>

      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="mt-2 text-sm">{description}</p>

      {/* Floating Glowing Image */}
      {hover && (
        <motion.div
          className="absolute bottom-0 right-0 opacity-30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/svg/illustrations/grid-grey.svg" alt="Glow Effect" width={120} height={120} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeaturesSection;
