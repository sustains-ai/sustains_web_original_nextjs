"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { productsData } from "../../../common/data/products";

export default function RiskKnowMorePage() {
    const riskProducts = productsData.risk;

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.h1
                    className="text-5xl font-extrabold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#089B45] to-[#0ABF53] leading-normal"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Smarter Portfolio Strategies
                </motion.h1>
                <motion.p
                    className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Explore our advanced tools for portfolio analysis and financial decision-making.
                </motion.p>

                {/* Product Teasers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {riskProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className={`rounded-xl shadow-lg overflow-hidden ${product.color} ${product.border} border-2 transition-all duration-300 ${
                                product.status === "offering" ? "hover:shadow-xl" : "opacity-75 cursor-not-allowed"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={product.status === "offering" ? { scale: 1.05 } : {}}
                        >
                            {/* Teaser Image */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={product.img}
                                    alt={product.title}
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                                <div className="absolute inset-0 bg-black opacity-10 rounded-t-xl" />
                            </div>

                            {/* Teaser Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {product.description}
                                </p>
                                <span
                                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                                        product.status === "offering"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-200 text-gray-500"
                                    }`}
                                >
                  {product.status === "offering" ? "Available Now" : "In Pipeline"}
                </span>
                            </div>

                            {/* Decorative Accent */}
                            {product.status === "offering" && (
                                <div className={`absolute top-0 left-0 w-2 h-full ${product.border.replace("border-", "bg-")}`} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}