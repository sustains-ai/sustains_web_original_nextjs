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
        />
        <FeatureCard
          icon="bi-bar-chart-line"
          title="Quantitative Excellence"
          description="Showcase our expertise in risk modeling, forecasting, and optimization."
        />
        <FeatureCard
          icon="bi-briefcase"
          title="Seamless Web Solutions"
          description="User-friendly web platforms and robust API integrations for financial and energy analytics."
        />
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="relative p-6 rounded-lg bg-white shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="mb-4">
        <i className={`${icon} fs-1 text-dark`}></i>
      </div>

      <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
      <p className="mt-2 text-sm text-gray-600">{description}</p>

      {/* Floating Glowing Image */}
      {hover && (
        <motion.div
          className="absolute bottom-0 right-0 opacity-30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/svg/illustrations/grid-grey.svg"
            alt="Glow Effect"
            width={120}
            height={120}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeaturesSection;
