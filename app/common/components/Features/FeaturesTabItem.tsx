"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FeatureTab } from "@/types/featureTab";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
    const { title, desc1, image, link } = featureTab;

    const knowMorePath =
        link === "sustainability"
            ? "/vertical/sustainability/know-more"
            : "/vertical/risk/know-more";

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            {/* Image Section */}
            <div className="relative h-96 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-xl"
                    priority
                />
                {/* Border hover effect */}
                <motion.div
                    className="absolute inset-0 border-4 border-transparent rounded-t-xl"
                    whileHover={{ borderColor: "#0ABF53" }}
                    transition={{ duration: 0.3 }} // Reduced transition duration for smooth effect
                />
            </div>

            {/* Content Section */}
            <div className="p-8 bg-gradient-to-b from-white to-gray-50 text-center">
                <h3 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                    {desc1}
                </p>
                <Link href={knowMorePath} passHref>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-3 bg-[#0ABF53] text-white font-semibold rounded-full shadow-md hover:bg-[#089B45] hover:shadow-lg transition-all duration-300"
                    >
                        Know More
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturesTabItem;
