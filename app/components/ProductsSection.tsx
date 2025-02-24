"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "Risk Analytics Platform",
    description: "For fund managers to analyze risks and generate reports using AI-driven insights.",
    icon: "bi-bar-chart",
    img: "/img/950x950/finance_1.jpg",
    color: "bg-[#E6F4EC]", // Light green background
    border: "border-[#0ABF53]", // Green border
  },
  {
    title: "Standardized Equity Research",
    description: "Predicts stock fair value and automates buy/sell calls using quantitative models.",
    icon: "bi-pie-chart",
    img: "/img/950x950/equity_research.jpg",
    color: "bg-[#F0FAF5]",
    border: "border-[#0CA148]",
  },
  {
    title: "Energy Resource Planner",
    description: "Optimizes energy resource planning with AI-powered insights for sustainability.",
    icon: "bi-lightbulb",
    img: "/img/950x950/energy_1.jpg",
    color: "bg-[#EDF7F2]",
    border: "border-[#089B45]",
  },
  {
    title: "Load Flow Analysis",
    description: "Evaluates risks and recommends optimal energy mix proportions for microgrids.",
    icon: "bi-gear",
    img: "/img/950x950/grid_analysis.jpg",
    color: "bg-[#E3F2E9]",
    border: "border-[#078C3E]",
  },
  {
    title: "Consultancy Services",
    description: "Providing expert financial and energy risk consulting tailored to your needs.",
    icon: "bi-person-workspace",
    img: "/img/950x950/consulting.jpg",
    color: "bg-[#DAF0E4]",
    border: "border-[#067A37]",
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Stacked Images */}
        <motion.div
          className="relative flex flex-row space-x-2 items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Image 1 */}
          <Image
            src="/img/580x480/iStock-2.jpg"
            alt="Finance Analysis"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
          {/* Image 2 */}
          <Image
            src="/img/350x700/img1.jpg"
            alt="Investment Strategy"
            width={180}
            height={300}
            className="rounded-lg shadow-lg -ml-8"
          />
          {/* Image 3 */}
          <Image
            src="/img/400x700/iStock-6.jpg"
            alt="Energy Planning"
            width={300}
            height={250}
            className="rounded-lg shadow-lg -mr-6"
          />
        </motion.div>

        {/* Right Side - Stacked Products */}
        <div>
          <motion.h2
            className="text-4xl font-extrabold mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore Our Core Products
          </motion.h2>

          <div className="space-y-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProductCard = ({
  title,
  description,
  img,
  color,
}: {
  title: string;
  description: string;
  img: string;
  color: string;
}) => {
  return (
    <motion.div
      className={`relative p-6 rounded-lg ${color} text-gray-900 shadow-lg overflow-hidden cursor-pointer`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
    </motion.div>
  );
};

export default ProductsSection;
