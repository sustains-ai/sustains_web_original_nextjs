"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Sample Blog Data (Ensuring all images have the same dimensions)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Risk in Financial Markets",
    description:
      "A deep dive into market risk, portfolio optimization, and the tools that professionals use.",
    image: "/img/Blogs/Blog_1.jpg",
    link: "/blog/risk-analysis",
  },
  {
    id: 2,
    title: "The Future of Sustainable Energy",
    description:
      "Exploring the advancements in AI-driven energy forecasting and optimization.",
    image: "/img/Blogs/Blog_2.jpg",
    link: "/blog/sustainable-energy",
  },
  {
    id: 3,
    title: "Data-Driven Decision Making in Finance",
    description:
      "How AI and machine learning are transforming the way we make financial decisions.",
    image: "/img/Blogs/Blog_3.jpg",
    link: "/blog/data-driven-finance",
  },
];

const Blogs = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Latest Insights & Analysis
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#0ABF53] hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.2 }}
            >
              {/* Blog Image - Fixed Height & Width */}
              <div className="w-full h-[250px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{post.title}</h3>
                <p className="text-gray-700 mt-3">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-block mt-4 text-[#0ABF53] font-bold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
