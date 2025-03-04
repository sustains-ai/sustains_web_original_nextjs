"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Define a type for product status
type ProductStatus = "offering" | "pipeline";

const products = [
  {
    title: "Energy Resource Planner",
    description: "Optimizes energy resource planning with AI-powered insights for sustainability.",
    icon: "bi-lightbulb",
    img: "/img/products_images/product_3.jpg",
    status: "offering" as ProductStatus, // Current offering
    color: "bg-[#EDF7F2]", // Soft green background
    border: "border-[#089B45]", // Green border
  },
  {
    title: "Risk Analytics Platform",
    description: "For fund managers to analyze risks and generate reports using AI-driven insights.",
    icon: "bi-bar-chart",
    img: "/img/products_images/product_1.jpg",
    status: "offering" as ProductStatus, // Current offering
    color: "bg-[#E6F4EC]", // Light green background
    border: "border-[#0ABF53]", // Green border
  },
  {
    title: "Consultancy Services",
    description: "Providing expert financial and energy risk consulting tailored to your needs.",
    icon: "bi-person-workspace",
    img: "/img/products_images/product_5.jpg",
    status: "offering" as ProductStatus, // Current offering
    color: "bg-[#DAF0E4]", // Softer green background
    border: "border-[#067A37]", // Darker green border
  },
  {
    title: "Load Flow Analysis",
    description: "Evaluates risks and recommends optimal energy mix proportions for microgrids.",
    icon: "bi-gear",
    img: "/img/products_images/product_4.jpg",
    status: "pipeline" as ProductStatus, // In pipeline
    color: "bg-gray-100", // Muted gray for pipeline
    border: "border-gray-300", // Subtle gray border
  },
  {
    title: "Standardized Equity Research",
    description: "Predicts stock fair value and automates buy/sell calls using quantitative models.",
    icon: "bi-pie-chart",
    img: "/img/products_images/product_2.jpg",
    status: "pipeline" as ProductStatus, // In pipeline
    color: "bg-gray-100", // Muted gray for pipeline
    border: "border-gray-300", // Subtle gray border
  },
];

const ProductsSection = () => {
  return (
      <section className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-16">
        <motion.div
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
          {/* Left Side - Stacked Images (Unchanged) */}
          <motion.div
              className="relative flex flex-row space-x-2 items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
                src="/img/580x480/iStock-2.jpg"
                alt="Finance Analysis"
                width={250}
                height={250}
                className="rounded-lg shadow-lg"
            />
            <Image
                src="/img/350x700/img1.jpg"
                alt="Investment Strategy"
                width={180}
                height={300}
                className="rounded-lg shadow-lg -ml-8"
            />
            <Image
                src="/img/400x700/iStock-6.jpg"
                alt="Energy Planning"
                width={300}
                height={250}
                className="rounded-lg shadow-lg -mr-6"
            />
          </motion.div>

          {/* Right Side - Enhanced Product Cards */}
          <div>
            <motion.h2
                className="text-4xl font-extrabold mb-8 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0CA148]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
              Explore Our Core Products
            </motion.h2>

            <div className="space-y-6">
              {products.map((product, index) => (
                  <ProductCard key={index} {...product} index={index} />
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
                       border,
                       status,
                       index,
                     }: {
  title: string;
  description: string;
  img: string;
  color: string;
  border: string;
  status: ProductStatus;
  index: number;
}) => {
  const isOffering = status === "offering";
  const isPipeline = status === "pipeline";
  const isConsultancy = title === "Consultancy Services";

  return (
      <motion.div
          className={`relative p-6 rounded-lg ${color} ${border} border-2 shadow-lg overflow-hidden transition-all duration-500 ${
              isOffering ? "hover:shadow-xl" : "opacity-70 cursor-not-allowed"
          }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={isOffering ? { scale: 1.05 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Background Image Effect */}
        <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-semibold text-gray-800">{title}</h5>
            <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    isOffering
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500"
                }`}
            >
            {isOffering && !isConsultancy
                ? "Contact for Product Pilot"
                : isConsultancy
                    ? "Contact"
                    : "In Pipeline"}
          </span>
          </div>
          <p className="mt-2 text-sm text-gray-700">{description}</p>

          {/* Know More Button for Consultancy */}
          {isConsultancy && (
              <Link href="/consultancy">
                <motion.button
                    className="mt-4 px-4 py-2 bg-[#089B45] text-white rounded-full font-semibold text-sm hover:bg-[#0ABF53] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                  Know More
                </motion.button>
              </Link>
          )}
        </div>

        {/* Decorative Border Accent */}
        {isOffering && (
            <div className={`absolute top-0 left-0 w-2 h-full ${border.replace("border-", "bg-")}`} />
        )}
      </motion.div>
  );
};

export default ProductsSection;